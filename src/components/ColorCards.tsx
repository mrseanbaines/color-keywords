import React from 'react';
import { Flex, Box } from '@rebass/grid';
import colors from '../colors.json';
import ColorCard from '../components/ColorCard';
import { alphabetically, byLuminosity } from '../utils';

export default () => (
  <Flex flexWrap="wrap" p="16px">
    {[...colors].sort(alphabetically).map(({ keyword, hex, rgb }) => (
      <Box key={keyword} width={[1, 1 / 2, 1 / 3]} p="16px">
        <ColorCard keyword={keyword} hex={hex} rgb={rgb} />
      </Box>
    ))}
  </Flex>
);
