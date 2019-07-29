import React, { FC } from 'react';
import { Box, Flex } from '@rebass/grid';
import colors from '../colors.json';
import ColorCard from '../components/ColorCard';
import { Container } from '../styles/Grid';
import { ColorProps, SortFunc } from '../types';

interface Props {
  readonly copyFormat: keyof ColorProps;
  readonly activeSort: SortFunc;
  readonly onClick: (value: string) => void;
}

const ColorCards: FC<Props> = ({ copyFormat, activeSort, onClick }) => (
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

export default ColorCards;
