import { getDefaultPath } from '../../libs/routes';
import { BackLink, Container, ErrorCode, Message } from './style';

const NotFound = () => (
  <Container>
    <ErrorCode>404</ErrorCode>
    <Message>Oups! La page que vous demandez n'existe pas.</Message>
    <BackLink to={getDefaultPath('home')} selected={true}>
      Retourner sur la page d'accueil
    </BackLink>
  </Container>
);

export default NotFound;
