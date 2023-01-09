import { Container, Tag } from './style';

const Tags = ({ list }) => {
  return (
    <Container>
      {list.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Container>
  );
};

export default Tags;
