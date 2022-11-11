import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
  direction: ltr;
  outline: none;
}
:root {
  --index: calc(1vw + 1vh);
}

`;
