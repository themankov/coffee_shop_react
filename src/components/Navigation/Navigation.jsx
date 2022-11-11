import React from 'react';
import { DataList, StyledImg } from '../../styles/NavigationStyles/Navigation';

import NavigationItem from './NavigationItem';

const Navbar = ({ data, color, position }) => {
  const DataItems = data.map(({ item, id, link }) => {
    return <NavigationItem color={color} key={id} name={item} link={link} />;
  });

  return (
    <DataList position={position}>
      <StyledImg
        color={color}
        src={'.' + process.env.PUBLIC_URL + '/img/beans.svg'}
        alt="logo"
      />
      {DataItems}
    </DataList>
  );
};
export default Navbar;
