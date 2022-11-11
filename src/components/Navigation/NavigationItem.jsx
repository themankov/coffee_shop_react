import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  margin-right: calc(var(--index) * 1.8);
  font-size: calc(var(--index) * 0.5);
  color: ${(props) => props.color};
  font-family: 'Merienda';
  text-decoration: none;
  transition: color 0.4s;
  &:hover {
    color: rgba(184, 147, 0, 0.8);
  }
`;
const NavigationItem = ({ name, link, color }) => {
  return (
    <StyledLink to={link} color={color}>
      {name}
    </StyledLink>
  );
};
export default NavigationItem;
