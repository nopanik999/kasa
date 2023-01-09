import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  font-size: ${sizes.fontSize.large};
  font-weight: ${sizes.fontWeight.normal};
  line-height: ${sizes.lineHeight.large};
  color: ${props => props.theme.background};
  width: 335px;
  height: 255px;
  border-radius: ${sizes.radius.large};
  padding: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(${props => props.background}) no-repeat center center;

  @media ${breakpoints.laptop} {
    width: 340px;
    height: 340px;
  }
`;

export const Title = styled.span`
  text-align: center;
`;
