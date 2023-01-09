import { useState } from 'react';

import Icon from './Icon';
import { Container, Header, Text, Title } from './style';

const ExpandCollapse = ({ title, children, expanded: initialExpanded = false }) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  const toogleExpanded = () => {
    setExpanded(currentExpanded => !currentExpanded);
  };

  return (
    <Container>
      <Header onClick={toogleExpanded}>
        <Title>{title}</Title>
        <Icon expanded={expanded} />
      </Header>
      <Text expanded={expanded}>{children}</Text>
    </Container>
  );
};

export default ExpandCollapse;
