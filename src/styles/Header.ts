import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: white;
  color: dimgrey;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
`;

const HeaderLabel = styled.label`
  display: inline-block;
`;

const HeaderSelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;

  select {
    -webkit-appearance: none;
    background: white;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    padding: 0 1.5rem 0 0.5rem;
    line-height: 2rem;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
    border: 1px dashed lightgray;
    outline: none;
    font-weight: 400;
    width: 100%;

    :focus,
    :active {
      border-color: plum;
    }
  }

  ::after {
    position: absolute;
    right: 0.5rem;
    font-size: 0.75rem;
    content: '▼';
    pointer-events: none;
  }
`;

export { HeaderWrapper, HeaderLabel, HeaderSelectWrapper };
