import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box } from '@rebass/grid';
import GlobalStyles from './styles/GlobalStyles';
import colors from './colors.json';
import ColorCard from './components/ColorCard';

const Index = () => (
  <>
    <GlobalStyles />
    <Flex flexWrap="wrap" p="16px">
      {colors.map(({ keyword, hex, rgb }) => (
        <Box width={[1, 1 / 2, 1 / 3]} p="16px">
          <ColorCard key={keyword} keyword={keyword} hex={hex} rgb={rgb} />
        </Box>
      ))}
    </Flex>
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));
