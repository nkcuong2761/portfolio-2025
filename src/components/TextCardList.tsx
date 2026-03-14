import React, { useState } from 'react';
import { TextCard } from './TextCard.tsx';

interface TextCardListProps {
  texts: string[];
}

export const TextCardList: React.FC<TextCardListProps> = ({ texts }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0px',
        marginLeft: '-20px', // Negative margin for overlapping effect
        marginRight: '-20px',
        marginTop: '-10px',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {texts.map((text, index) => (
        <div
          key={index}
          style={{
            marginLeft: index > 0 ? '-20px' : '0px', // Overlap each card
          }}>
          <TextCard
            text={text}
            index={index}
            activeIndex={activeIndex}
            onActivate={setActiveIndex}
          />
        </div>
      ))}
    </div>
  );
};
