import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { Text } from '../Text.tsx';

interface TextCardProps {
  text: string;
  index: number;
  activeIndex: number | null;
  onActivate: (index: number) => void;
}

interface StyledCardProps {
  isHovered: boolean;
  isActive: boolean;
  rotation: number;
  zIndex: number;
  currentTheme: keyof typeof themes;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  width: 200px;
  min-height: 120px;
  transition: 
    background-color 300ms ease,
    transform 300ms ease,
    z-index 0ms ease;
  
  background-color: ${(p) => 
    p.isHovered 
      ? themes[p.currentTheme].bg.neutral.hover 
      : `${themes[p.currentTheme].bg.neutral.alpha}`};
  border: 0.5px solid ${(p) => themes[p.currentTheme].stroke.neutral.border};
  
  transform: ${(p) => 
    p.isHovered 
      ? `translateY(-50px) rotate(0deg)` 
      : `translateY(0px) rotate(${p.rotation}deg)`};
  
  z-index: ${(p) => p.isActive ? 100 : p.zIndex};
`;

export const TextCard: React.FC<TextCardProps> = ({ text, index, activeIndex, onActivate }) => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const [isHovered, setIsHovered] = useState(false);

  // Generate random rotation between -3 and 3 degrees, and random z-index between 1-10
  const { rotation, zIndex } = useMemo(() => {
    // Use index as seed for consistent randomness per card
    const seed = index * 7 + 13;
    // Generate rotation between -3 and 3 degrees with decimals for natural variation
    // Map seed to -3 to 3 range
    const rotation = ((seed % 61) / 10) - 3; // -3.0 to 3.0
    const zIndex = (seed % 10) + 1; // 1-10
    return { rotation, zIndex };
  }, [index]);

  const isActive = activeIndex === index;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onActivate(index);
  };

  return (
    <StyledCard
      isHovered={isHovered}
      isActive={isActive}
      rotation={rotation}
      zIndex={zIndex}
      currentTheme={theme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text
        variant='mainBodySmRegular'
        color={isHovered ? themes[theme].textIcon.neutral.primary : themes[theme].textIcon.neutral.tertiary}>
        {text}
      </Text>
    </StyledCard>
  );
};

export default TextCard;

