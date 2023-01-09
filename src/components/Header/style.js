import styled from 'styled-components';

import { breakpoints } from '../../libs/styles';
import { StyledLink } from '../Link/style';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 4.5rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.img`
  max-width: 145px;
  height: auto;

  @media ${breakpoints.laptop} {
    max-width: 100%;
  }
`;

export const Link = styled(StyledLink)`
  margin-left: 1rem;
  @media ${breakpoints.laptop} {
    margin-left: 3rem;
  }
`;
