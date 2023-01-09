import styled from 'styled-components';

import ratingOff from '../../assets/ratingOff.png';
import ratingOn from '../../assets/ratingOn.png';
import { breakpoints } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  @media ${breakpoints.laptop} {
    gap: 1.2rem;
  }
`;

export const Star = styled.div`
  width: 1rem;
  height: 1rem;
  background: url(${props => (props.active === true ? ratingOn : ratingOff)}) no-repeat center
    center;
  background-size: cover;
  @media ${breakpoints.laptop} {
    width: 2rem;
    height: 2rem;
  }
`;
