import React from 'react';

interface BoxProps {
  width: string;
  color: string;
  text: string;
  position: string,
  textStyles: string;
}

const ColoredBox = ({ width, color, text, position, textStyles }: BoxProps) => (
  <div className={`${width} ${color} shrink-0 flex items-center justify-${position}`}>
    <p className={textStyles}>{text}</p>
  </div>
);

export default ColoredBox;
