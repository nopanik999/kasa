import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${sizes.fontSize.extraSmall};
  font-weight: ${sizes.fontWeight.normal};
  line-height: ${sizes.lineHeight.small};
  ${props => {
    if (props.selected === true) {
      return css`
        color: ${props.theme.text};
        text-decoration: underline;
      `;
    }

    return css`
      color: ${props.theme.text};
    `;
  }}

  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxLarge};
    line-height: ${sizes.lineHeight.xxLarge};
  }
`;
