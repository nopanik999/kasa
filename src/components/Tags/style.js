import styled from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
`;

export const Tag = styled.div`
  padding: 0.2rem 1.5rem;
  border-radius: ${sizes.radius.medium};
  font-size: ${sizes.fontSize.xxSmall};
  background-color: ${props => props.theme.tag.background};
  color: ${props => props.theme.tag.text};
  @media ${breakpoints.laptop} {
    padding: 0.2rem 2.5rem;
    border-radius: ${sizes.radius.large};
    font-size: ${sizes.fontSize.small};
  }
`;
