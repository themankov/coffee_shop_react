import React from 'react';
import AboutUs from './About-us/AboutUs';
import Header from './../Header/Header';

import { OurBest } from './OurBest/OurBest';
const Main = ({ state, findName, page }) => {
  return (
    <>
      <Header data={state.navigationData} findName={findName} page={page} />
      <AboutUs />
      <OurBest data={state.mainPage.cards} />
    </>
  );
};
export default Main;
