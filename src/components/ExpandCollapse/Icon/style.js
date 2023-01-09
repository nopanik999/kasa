import styled from 'styled-components';

import { breakpoints } from '../../../libs/styles';

export const StyledImg = styled.img`
  width: 15px;
  height: auto;

  @media ${breakpoints.laptop} {
    width: 24px;
  }
`;
