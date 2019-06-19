import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Dosis:400,600&display=swap');
  ${reset};

  html,
  body {
    background: whitesmoke;
    font-family: 'Dosis', Helvetica, Arial, sans-serif;
  }
`;
