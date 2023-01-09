import React from 'react';

import imgSrc from '../../assets/logo.png';
import useRouter from '../../libs/hooks/useRouter';
import { getDefaultPath } from '../../libs/routes';
import { Container, Link, Logo, Menu } from './style';

const Header = () => {
  const router = useRouter();
  const { isCurrent } = router;

  return (
    <Container>
      <Logo src={imgSrc} alt="Logo" />
      <Menu>
        <Link to={getDefaultPath('home')} selected={isCurrent('home')}>
          Accueil
        </Link>
        <Link to={getDefaultPath('about')} selected={isCurrent('about')}>
          A propos
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
