import React from 'react';

import imgSrc from '../../assets/logoBlanc.png';
import { Container, Copyright } from './style';

const Footer = () => (
  <Container>
    <img src={imgSrc} alt="Logo" />
    <Copyright>© 2020 Kasa. All rights reserved</Copyright>
  </Container>
);

export default Footer;
