import styled from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Name = styled.div`
  color: ${props => props.theme.text};
  font-size: ${sizes.fontSize.extraSmall};
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.large};
  }
`;

export const Picture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${sizes.radius.round};
  @media ${breakpoints.laptop} {
    width: 4rem;
    height: 4rem;
  }
`;
