import { Container, Star } from './style';

const Rating = ({ value }) => {
  const scores = [1, 2, 3, 4, 5];

  return (
    <Container>
      {scores.map((score, index) => (
        <Star key={`star_${index}`} active={score <= value} />
      ))}
    </Container>
  );
};

export default Rating;
