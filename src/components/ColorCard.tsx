import React from 'react';
import {
  ColorCardWrapper,
  ColorCardColor,
  ColorCardTitle,
  ColorCardDetails,
} from '../styles/ColorCard';

interface ColorCardProps {
  keyword: string;
  hex: string;
  rgb: string;
  onClick(value: string): void;
  copyFormat: string;
}

export default ({ keyword, hex, rgb, onClick, copyFormat }: ColorCardProps) => {
  const formats = {
    keyword,
    hex: hex.toUpperCase(),
    rgb: `rgb(${rgb})`,
  };

  return (
    <ColorCardWrapper tabIndex={0} onClick={() => onClick(formats[copyFormat])}>
      <div>
        <ColorCardTitle mb="1.5rem">{formats.keyword}</ColorCardTitle>
        <ColorCardDetails>{formats.hex}</ColorCardDetails>
        <ColorCardDetails mt="0.5rem">{formats.rgb}</ColorCardDetails>
      </div>
      <ColorCardColor bg={formats.keyword} />
    </ColorCardWrapper>
  );
};
