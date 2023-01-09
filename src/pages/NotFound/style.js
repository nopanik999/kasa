import styled from 'styled-components';

import { StyledLink } from '../../components/Link/style';
import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-weight: ${sizes.fontWeight.normal};
`;

export const ErrorCode = styled.span`
  font-weight: ${sizes.fontWeight.bold};
  font-size: 96px;
  @media ${breakpoints.laptop} {
    font-size: 288px;
  }
`;

export const Message = styled.span`
  font-size: ${sizes.fontSize.xLarge};
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxxxLarge};
  }
`;

export const BackLink = styled(StyledLink)`
  font-size: ${sizes.fontSize.small};
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.large};
  }
`;
