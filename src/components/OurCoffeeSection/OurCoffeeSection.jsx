import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

const OurCoffeeSection = ({
  state,
  findName,

  children,
}) => {
  return (
    <>
      <Header findName={findName} data={state.navigationData} page={'coffee'} />
      {children}

      <Outlet />
    </>
  );
};
export default OurCoffeeSection;
