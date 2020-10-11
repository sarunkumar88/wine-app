import React from 'react';

import logo from '../../assets/images/logo.png';
import { Container, Logo, WelcomeOffer } from './style';

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <WelcomeOffer>
        Special Welcome Offer
      </WelcomeOffer>
    </Container>
  )
}

export default Header;
