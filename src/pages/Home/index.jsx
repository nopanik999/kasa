import { Lease } from '../../components';
import locations from '../../libs/locations.json';
import { Container, Header, LeaseList, Title } from './style';

const Home = () => (
  <Container>
    <Header>
      <Title>Chez vous,&nbsp;</Title>
      <Title>partout et ailleurs</Title>
    </Header>
    <LeaseList>
      {locations.map(item => (
        <Lease key={item.id} item={item} />
      ))}
    </LeaseList>
  </Container>
);

export default Home;
