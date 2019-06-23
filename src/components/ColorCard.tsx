import React from 'react';
import {
  ColorCardWrapper,
  ColorCardColor,
  ColorCardTitle,
  ColorCardDetails,
} from '../styles/ColorCard';
import { ColorProps } from '../types';

interface Props extends ColorProps {
  copyFormat: keyof ColorProps;
  onClick: (value: string) => void;
}

export default ({ keyword, hex, rgb, copyFormat, onClick }: Props) => {
  const formats = {
    keyword,
    hex: hex.toUpperCase(),
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
