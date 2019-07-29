import React, { FC } from 'react';
import {
  ColorCardColor,
  ColorCardDetails,
  ColorCardTitle,
  ColorCardWrapper,
} from '../styles/ColorCard';
import { ColorProps } from '../types';

interface Props extends ColorProps {
  readonly copyFormat: keyof ColorProps;
  readonly onClick: (value: string) => void;
}

const ColorCard: FC<Props> = ({ hex, keyword, rgb, copyFormat, onClick }) => {
  const formats = {
    hex: hex.toUpperCase(),
    keyword,
    rgb: `rgb(${rgb})`,
  };

  return (
    <ColorCardWrapper
      tabIndex={0}
      onClick={() => onClick(formats[copyFormat])}
      onKeyPress={e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();

          onClick(formats[copyFormat]);
        }
      }}
    >
      <div>
        <ColorCardTitle mb="1.5rem">{formats.keyword}</ColorCardTitle>
        <ColorCardDetails>{formats.hex}</ColorCardDetails>
        <ColorCardDetails mt="0.5rem">{formats.rgb}</ColorCardDetails>
      </div>
      <ColorCardColor bg={formats.keyword} />
    </ColorCardWrapper>
  );
};

export default ColorCard;
