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
}

export default ({ keyword, hex, rgb }: ColorCardProps) => (
  <ColorCardWrapper tabIndex={0}>
    <div>
      <ColorCardTitle mb="1.5rem">{keyword}</ColorCardTitle>
      <ColorCardDetails>{hex.toUpperCase()}</ColorCardDetails>
      <ColorCardDetails mt="0.5rem">{`rgb( ${rgb} )`}</ColorCardDetails>
    </div>
    <ColorCardColor bg={keyword} />
  </ColorCardWrapper>
);
