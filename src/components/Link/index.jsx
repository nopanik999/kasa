import { StyledLink } from './style';

const Link = ({ to, selected, children }) => (
  <StyledLink to={to} selected={selected}>
    {children}
  </StyledLink>
);

export default Link;
