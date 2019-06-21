import React from 'react';
import { Flex, Box } from '@rebass/grid';
import colors from '../colors.json';
import ColorCard from '../components/ColorCard';
import { Container } from '../styles/Grid';

interface ColorProps {
  keyword: string;
  hex: string;
  rgb: string;
}

interface Props {
  copyFormat: string;
  activeSort: (a: ColorProps, b: ColorProps) => number;
  onClick: (value: string) => void;
}

export default ({ copyFormat, activeSort, onClick }: Props) => (
  <Container>
    <Flex flexWrap="wrap" p="16px">
      {[...colors].sort(activeSort).map(({ keyword, hex, rgb }: ColorProps) => (
        <Box key={keyword} width={[1, 1 / 2, 1 / 3]} p="16px">
          <ColorCard
            keyword={keyword}
            hex={hex}
            rgb={rgb}
            onClick={onClick}
            copyFormat={copyFormat}
          />
        </Box>
      ))}
    </Flex>
  </Container>
);
