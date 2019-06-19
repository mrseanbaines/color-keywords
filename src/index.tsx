import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorCards from './components/ColorCards';

const Index = () => (
  <>
    <GlobalStyles />
    <ColorCards />
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));
