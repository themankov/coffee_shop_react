import React from 'react';

import AboutUs from '../common/AboutUs';
import Cards from '../common/Cards';
import Header from '../Header/Header';
const OurPleasure = ({ state, findName }) => {
  return (
    <>
      <Header data={state.navigationData} findName={findName} />
      <AboutUs src={'/img/ourCoffee/foryourpleasure.png'} />
      ;
      <Cards visibleData={state.ourCoffeePage.cards} />
    </>
  );
};
export default OurPleasure;
