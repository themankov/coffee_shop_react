import React from 'react';
import styled from 'styled-components';

const StyledBreds = styled.div`
  display: flex;
  color: black;
  margin: calc(var(--index)*.9) auto;
  justify-content: center;
  align-items: center;
  img {
    width: calc(var(--index) * 1.3);
    aspect-ratio: 1;
    object-fit:contain;

    margin: 0 calc(var(--index) * 0.8) 0 calc(var(--index) * 0.8);
    filter:${(props) =>
      props.color === 'white' ? 'invert(100%);' : 'invert(0%);'}
    vertical-align: middle;
  }
  .line {
    width: calc(var(--index) * 2.7);
    height: calc(var(--index)*.2);
    background-color: ${(props) => props.color};
    
  }
`;
export const Breds = ({ color }) => {
  return (
    <StyledBreds color={color}>
      <div className="line"></div>
      <img
        src={'.' + process.env.PUBLIC_URL + '/img/ourCoffee/beans2.svg'}
        alt="beans"
      />
      <div className="line"></div>
    </StyledBreds>
  );
};
