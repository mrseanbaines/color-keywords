import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

const ColorCardWrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
  padding: 1rem;
  color: dimgrey;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  transition: all 100ms;
  outline: none;

  :hover,
  :focus {
    transform: scale(1.05);
  }

  :active {
    transform: scale(1.03);
  }
`;

const ColorCardColor = styled.div<ColorProps>`
  ${color};
  border-left: 1px solid whitesmoke;
  width: 2.5rem;
  margin: -1rem;
`;

const ColorCardTitle = styled.div<SpaceProps>`
  ${space};
  font-size: 1.5rem;
  font-weight: 600;
`;

const ColorCardDetails = styled.div<SpaceProps>`
  ${space};
  font-size: 1rem;
  color: lightgrey;
  font-weight: 400;
`;

export { ColorCardWrapper, ColorCardColor, ColorCardTitle, ColorCardDetails };
