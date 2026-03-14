import React, { useState, useMemo } from 'react';
import { motion, LazyMotion, domAnimation } from 'motion/react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { Text } from '../Text.tsx';

interface TextCardProps {
  text: string;
  index: number;
  activeIndex: number | null;
  onActivate: (index: number) => void;
}

export const TextCard: React.FC<TextCardProps> = ({ text, index, activeIndex, onActivate }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Generate random rotation and z-index
  const { rotation, zIndex } = useMemo(() => {
    const seed = index * 7 + 13;
    const rotation = ((seed % 61) / 10) - 3; // -3.0 to 3.0
    const zIndex = (seed % 10) + 1; // 1-10
    return { rotation, zIndex };
  }, [index]);

  const isActive = activeIndex === index;

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '12px',
          borderRadius: '12px',
          width: '200px',
          minHeight: '120px',
          cursor: 'pointer',
          border: `0.5px solid ${themes[theme].stroke.neutral.border}`,
          backdropFilter: 'blur(10px)',
          color: themes[theme].textIcon.neutral.tertiary,
          backgroundColor: themes[theme].bg.neutral.alpha,
        }}

        // Motion properties
        initial={{
          y: 0,
          rotate: rotation,
          zIndex: zIndex,
        }}
        animate={{
          zIndex: isActive ? 100 : zIndex,
        }}
        whileHover={{
          cursor: 'default',
          y: -30,
          rotate: 0,
          scale: 1.2,
          color: themes[theme].textIcon.neutral.primary,
          backgroundColor: themes[theme].bg.neutral.hover,
        }}

        onHoverStart={() => {
          setIsHovered(true);
          onActivate(index);
        }}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Text
          variant={isHovered ? 'mainBodySmEmphasize' : 'mainBodySmRegular'}>
          {text}
        </Text>
      </motion.div>
    </LazyMotion>
  );
};
