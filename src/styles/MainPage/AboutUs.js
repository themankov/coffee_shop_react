import styled from 'styled-components';
export const StyledAboutUs = styled.div`
  width: calc(var(--index) * 21.8);
  margin: calc(var(--index) * 3.6) auto;
  background-color: white;
  height: calc(var(--index) * 23);
  h1 {
    font-size: calc(var(--index) * 1.09);
    text-align: center;
    font-family: 'Merienda';
  }
  .aboutUs__text {
    font-size: calc(var(--index) * 0.6);
    font-family: 'Merienda';
    font-style: italic;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
