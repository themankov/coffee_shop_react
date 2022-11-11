import React from 'react';
import { FooterStyles } from '../../styles/Footer/FooterStyles';
import { Breds } from '../common/Breds';
import Navbar from '../Navigation/Navigation';
const Footer = ({ data }) => {
  return (
    <FooterStyles>
      <Navbar data={data} color="black" position="footer" />
      <Breds color="black" />
    </FooterStyles>
  );
};
export default Footer;
