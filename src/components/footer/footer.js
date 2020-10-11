import React from 'react';

import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Offer available to first-time WSJwine Discovery Club members only and limited to one case per household. Offer subject to availability. In the unlikely event of a wine becoming unavailable, a substitute of similar style and of equal or greater value will be supplied. Licensed retailers reserve the right to refuse any order. State and local policy governs all transactions. Licensed retailers only fulfill orders from adults at least 21 years old and all applicable taxes are paid.</p>

      <p>WINES AND OFFER MAY VARY BY STATE. 100% money-back guarantee applies to all wines. Delivery available to AZ, CA (offer may vary), CO, CT, FL, GA, IA, ID, IL, IN (limited delivery area), KS, LA, MA, MD, ME, MI, MN, MO, MT, NC, ND, NE, NH, NJ (offer may vary), NM, NV, NY, OH, OK, OR (not eligible for free gift), PA, SC, SD (offer may vary), TN, TX (voucher not required), VA, VT, WA, WI, WV, WY and DC. Void where prohibited by law.</p>

      <p>WSJwine is operated independently of The Wall Street Journal's news department.</p>

      <p>&copy; {new Date().getFullYear()} WSJwine All Rights Reserved. | Terms & Conditions | Privacy Policy</p>
    </FooterContainer>
  )
}

export default Footer;
