import styled from 'styled-components';

import nextSrc from '../../assets/sliderNext.png';
import prevSrc from '../../assets/sliderPrev.png';
import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: ${sizes.radius.large};
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  height: 255px;
  width: 100%;
  overflow: hidden;
  @media ${breakpoints.laptop} {
    border-radius: ${sizes.radius.wide};
    height: 415px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PrevNext = styled.div`
  cursor: pointer;
  width: 0.75rem;
  height: 1.25rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 0.35rem;
  @media ${breakpoints.laptop} {
    width: 3rem;
    height: 5rem;
    margin: 2rem 1.5rem 0;
  }
`;

export const Prev = styled(PrevNext)`
  background-image: url(${prevSrc});
`;

export const Next = styled(PrevNext)`
  background-image: url(${nextSrc});
`;

export const Position = styled.div`
  display: none;
  color: ${props => props.theme.slider.text};

  @media ${breakpoints.laptop} {
    display: flex;
    font-size: ${sizes.fontSize.large};
    margin-bottom: 1.5rem;
  }
`;
