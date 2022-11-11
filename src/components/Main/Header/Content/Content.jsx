import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Breds } from '../../../common/Breds';
const StyledText = styled.div`
  text-align: center;

  margin: calc(var(--index) * 5) auto;
  font-size: calc(var(--index) * 1.8);
  font-family: 'Merienda';
  font-weight: 700;
  color: white;

  .text_question {
    font-size: var(--index);
  }
  .button {
    display: inline-block;
    text-decoration: none;
    width: calc(var(--index) * 5.5);
    height: calc(var(--index) * 1.8);
    padding-top: calc(var(--index) * 0.4);
    font-size: calc(var(--index) * 0.6);
    font-family: 'Merienda';
    font-weight: 700;
    background-color: transparent;
    border: solid white calc(var(--index) * 0.13);
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
const Content = (props) => {
  return (
    <StyledText>
      Everything You Love About Coffee
      <Breds color="white" />
      <div className="text_question">
        We makes every day full of energy and taste <br></br>
        Want to try our beans?
      </div>
      <NavLink to={'/pleasure'} className="button">
        More
      </NavLink>
    </StyledText>
  );
};
export default Content;
