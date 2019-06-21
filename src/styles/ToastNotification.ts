import styled from 'styled-components';

interface Props {
  show?: boolean;
}

const ToastNotificationWrapper = styled.div<Props>`
  background: lightgreen;
  color: white;
  font-weight: 600;
  position: fixed;
  bottom: 1rem;
  right: ${({ show }) => (show ? '1rem' : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  padding: 1rem 2rem;
  z-index: 1;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  transition: all 300ms;
`;

export { ToastNotificationWrapper };
