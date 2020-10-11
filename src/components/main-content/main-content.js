import React from 'react';

import { MainContentContainer, Title, ContentHeader } from './styles';
import Products from '../products/products';
import Form from '../form/form';

const MainContent = () => {
  return (
    <MainContentContainer>
      <Title>These are the dozen wines you need to taste ...</Title>
      <p>Many of our Top 12 wines have won major awards. Others have been recorded as a favorite by thousands of wine fans online. You'll uncork them all for ONLY $69.99 as your introduction to the WSJwine Discovery Club.</p>

      <p><strong>It gets better ...</strong> you'll also enjoy two bottles of a stunningly rich, 98-point Super Tuscan—made in the traditional appassimento method—plus a pair of fine, stemless glasses (worth $64.97).</p>

      <p><strong>The rewards continue ...</strong> Discovery Club members earn credits for free bottles, upgrades to a 1.5-liter magnum and a luxury bottle (worth $40+), plus exclusive offers throughout the year.</p>

      <ContentHeader>STEP1: Which Case Would You Like?</ContentHeader>
      <p>Whatever you choose, we'll add in 2 BONUS, 98-point Super Tuscans and 2 stemless glasses. The complete package—worth over $260—is yours for ONLY $69.99 (plus $19.99 shipping & applicable tax).</p>
      <Products />

      <ContentHeader>STEP2: Where Would You Like Your Wine Delivered?</ContentHeader>
      <Form />
    </MainContentContainer>
  )
}

export default MainContent;
