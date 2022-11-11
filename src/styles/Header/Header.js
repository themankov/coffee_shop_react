import styled from 'styled-components';
const banner = '.' + process.env.PUBLIC_URL + '/img/ourCoffee/banner.png';
export const StyledHeader = styled.header`
  height: ${(props) =>
    props.page === 'mainPage'
      ? 'calc(var(--index) * 27);'
      : 'calc(var(--index) * 11.8);'};

  width: 100%;
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .heading {
    text-align: center;
    font-family: 'Merienda';
    font-size: calc(var(--index) * 1.8);
    font-style: italic;
    margin-top: calc(var(--index) * 3.1);
    color: white;
  }
`;
