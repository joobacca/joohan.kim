import styled from 'styled-components';
import { animated } from 'react-spring';

const Button = styled(animated.button)`
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  background: white;
  color: ${({ color }) => color};
  padding: 10px 15px;
  font-size: 1.4rem;
  margin-top: 10px;
  cursor: pointer;
`;

export default Button;