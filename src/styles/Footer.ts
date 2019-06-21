import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: lightcoral;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;

  a {
    font-weight: 600;
    transition: all 100ms;

    :hover,
    :focus,
    :active {
      border-bottom: 1px dashed white;
    }
  }
`;

export { FooterWrapper };
