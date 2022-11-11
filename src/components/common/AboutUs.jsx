import React from 'react';
import { StyledAboutUs } from '../../styles/OurCoffeeSection/AboutUs';
import { Breds } from './Breds';

const AboutUs = ({ src }) => {
  return (
    <StyledAboutUs>
      <div className="content">
        <img
          src={`.${process.env.PUBLIC_URL}${src}`}
          alt="logo"
          className="content-left"
        />
        <div className="content-right">
          <div className="content-right-heading">About our beans</div>
          <Breds color="black" />
          <div className="content-right-text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
            <br />
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. <br />
            As greatly removed calling pleased improve an. Last ask him cold
            feel
            <br />
            met spot shy want. Children me laughing we prospect answered
            followed. At it went is song that held help face.
          </div>
        </div>
      </div>
      <div className="line"></div>
    </StyledAboutUs>
  );
};
export default AboutUs;
