import React from 'react';
import { StyledHeader } from '../../styles/Header/Header';
import Content from '../Main/Header/Content/Content';
import Navbar from './../Navigation/Navigation';
const Header = ({ data, findName, page }) => {
  const name = findName(window.location.pathname);

  return (
    <StyledHeader page={page}>
      <Navbar data={data} color="white" position="header" />
      <div className="heading">
        {window.location.pathname === '/' ? <Content /> : name}
      </div>
    </StyledHeader>
  );
};
export default Header;
