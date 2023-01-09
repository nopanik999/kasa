import { getParametrablePath } from '../../libs/routes';
import { StyledLink, Title } from './style';

const Lease = ({ item }) => (
  <StyledLink to={getParametrablePath('lease', { leaseId: item.id })} background={item.cover}>
    <Title>{item.title}</Title>
  </StyledLink>
);

export default Lease;
