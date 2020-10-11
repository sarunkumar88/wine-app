import React from 'react';

import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import MainContent from '../../components/main-content/main-content';
import SideContent from '../../components/side-content/side-content';
import Footer from '../../components/footer/footer';

import { HomePageContainer, Container } from './styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Banner />
      <Container>
        <MainContent />
        <SideContent />
      </Container>
      <Footer />
    </HomePageContainer>
  )
}

export default HomePage;
