import styled from 'styled-components';

import backgroundSrc from '../../assets/home.png';
import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  font-weight: ${sizes.fontWeight.normal};
  @media ${breakpoints.laptop} {
    gap: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${backgroundSrc}) no-repeat center center;
  font-size: ${sizes.fontSize.xxLarge};
  width: 100%;
  height: 111px;
  border-radius: ${sizes.radius.large};
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxxxxLarge};
    height: 223px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${sizes.radius.wide};
  }
`;

export const Title = styled.div`
  padding: 0 20px;
  @media ${breakpoints.laptop} {
    padding: 0;
  }
`;

export const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media ${breakpoints.laptop} {
    background-color: ${props => props.theme.block.background};
    border-radius: ${sizes.radius.wide};
    padding: 3rem;
  }
`;
