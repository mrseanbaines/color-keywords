import { Box, Flex } from '@rebass/grid';
import React from 'react';
import colors from '../colors.json';
import ColorCard from '../components/ColorCard';
import { Container } from '../styles/Grid';
import { ColorProps } from '../types';

interface Props {
  readonly copyFormat: keyof ColorProps;
  readonly activeSort: (a: ColorProps, b: ColorProps) => number;
  readonly onClick: (value: string) => void;
}

export default ({ copyFormat, activeSort, onClick }: Props) => (
  <Container>
    <Flex flexWrap="wrap" p="16px">
      {[...colors].sort(activeSort).map(({ hex, keyword, rgb }) => (
        <Box key={keyword} width={[1, 1 / 2, 1 / 3]} p="16px">
          <ColorCard
            hex={hex}
            keyword={keyword}
            rgb={rgb}
            onClick={onClick}
            copyFormat={copyFormat}
          />
        </Box>
      ))}
    </Flex>
  </Container>
);
