import styled, { css } from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  font-size: ${sizes.fontSize.extraSmall};
  font-weight: ${sizes.fontWeight.normal};
  line-height: ${sizes.lineHeight.small};
  padding: 1rem;
  ${props => {
    return css`
      color: ${props.theme.footer.text};
      background-color: ${props.theme.footer.background};
    `;
  }}

  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxLarge};
    line-height: ${sizes.lineHeight.xxLarge};
  }
`;

export const Copyright = styled.span``;
