import styled from 'styled-components';

import { rotate } from '../../libs/styles';

export const SpinningLoader = styled.div`
  padding: 10px;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  border: 6px solid ${props => props.theme.text};
`;
