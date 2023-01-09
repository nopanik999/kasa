import { Container, Details, Name, Picture } from './style';

const Owner = ({ details }) => {
  const names = details.name.split(' ');

  return (
    <Container>
      <Details>
        {names.map((name, index) => (
          <Name key={`owner_${index}`}>{name}</Name>
        ))}
      </Details>
      <Picture src={details.picture} />
    </Container>
  );
};

export default Owner;
