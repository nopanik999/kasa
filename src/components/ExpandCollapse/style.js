import styled, { css } from 'styled-components';

import { breakpoints, deviceWidths, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  font-size: ${sizes.fontSize.extraSmall};
  font-weight: ${sizes.fontWeight.thin};
  line-height: ${sizes.lineHeight.small};
  width: 100%;
  max-width: ${deviceWidths.laptop};
  border-radius: ${sizes.radius.medium};
  overflow: hidden;
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxLarge};
    line-height: ${sizes.lineHeight.xxlarge};
    border-radius: ${sizes.radius.large};
  }
`;

/*
  border-top-left-radius: ${sizes.radius.medium};
  border-top-right-radius: ${sizes.radius.medium};
*/
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.block.title.background};
  padding: 0 1rem;
`;

export const Title = styled.div`
  font-weight: ${sizes.fontWeight.normal};
  color: ${props => props.theme.block.title.text};
`;

export const Text = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.block.background};
  ${props => {
    if (props.expanded === false) {
      return css`
        display: none;
        visibility: hidden;
      `;
    }
  }}
`;
