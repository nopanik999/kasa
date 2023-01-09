import styled from 'styled-components';

import { breakpoints, sizes } from '../../libs/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  font-weight: ${sizes.fontWeight.normal};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 1rem;
  @media ${breakpoints.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export const MainData = styled.div``;

export const ExtraData = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  @media ${breakpoints.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 0;
  }
`;

export const Title = styled.div`
  font-size: ${sizes.fontSize.large};
  line-height: ${sizes.lineHeight.xxLarge};
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.xxxxLarge};
    line-height: ${sizes.lineHeight.xxxxLarge};
  }
`;

export const Location = styled.div`
  font-size: ${sizes.fontSize.small};
  line-height: ${sizes.lineHeight.small};
  margin-top: 0.3rem;
  margin-bottom: 0.75rem;
  @media ${breakpoints.laptop} {
    font-size: ${sizes.fontSize.large};
    line-height: ${sizes.lineHeight.large};
    margin-bottom: 1.25rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 1rem;
  gap: 1.25rem;
  @media ${breakpoints.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.3rem;
    gap: 4.5rem;
  }
`;

export const Equipments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Equipment = styled.div``;

/* import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  border-bottom: 1px solid ${props => props.theme.title};
`;

export const Text = styled.div`
  color: ${props => props.theme.block.text};
  padding: 4rem;
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  color: ${props => props.theme.link};
`;
*/
