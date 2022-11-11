import styled from 'styled-components';
const myBest = '.' + process.env.PUBLIC_URL + '/img/MainBest.png';
export const OurBestStyle = styled.div`
  min-height: calc(var(--index) * 22.5);
  width: 100%;
  background: url(${myBest});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  h1 {
    text-align: center;
    font-size: calc(var(--index) * 1.09);
    padding-top: calc(var(--index) * 3.6);
    padding-bottom: calc(var(--index) * 1.8);
    font-family: 'Merienda';
  }
  .cards-wrapper {
    display: flex;
    width: calc(var(--index) * 36);
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width: 420px) {
      flex-direction: column;
      align-items: center;
      width: auto;
    }
  }
  .card-wrapper {
    background-color: rgba(255, 255, 255, 0.65);
    padding: 2rem;
    @media (max-width: 420px) {
      margin-bottom: 1rem;
    }

    .card__description {
      font-family: 'Merienda';
      font-size: calc(var(--index) * 0.6);
    }
    .card__price {
      text-align: end;
      font-weight: bold;
      font-size: calc(var(--index) * 0.6);
      font-style: italic;
      font-family: 'Merienda';
    }
    .card__img {
      width: calc(var(--index) * 6.8);
      height: calc(var(--index) * 6.1);
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
