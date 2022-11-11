import styled from 'styled-components';
export const StyledItem = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 70vh;
  display: flex;
  gap: calc(var(--index) * 2.3);
  margin: 0 auto;
  @media (max-width: 560px) {
    flex-direction: column;
  }
  .left {
    object-fit: cover;
    width: calc(var(--index) * 17.8);
    height: calc(var(--index) * 16.1);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  }
  .right {
    text-align: center;
    font-style: italic;
    font-family: 'Merienda';
    &-heading {
      font-size: calc(var(--index) * 1.09);
    }
    .right-info {
      display: flex;
      text-align: start;
      max-width: calc(var(--index) * 18.6);
      flex-direction: column;
      gap: calc(var(--index) * 1.09);
      &-country {
        font-weight: 700;
        font-size: calc(var(--index) * 0.63);
        span {
          font-weight: 200;
          font-size: calc(var(--index) * 0.63);
        }
      }
      &-name {
        font-weight: 700;
        font-size: calc(var(--index) * 0.63);
        span {
          font-weight: 200;
          font-size: calc(var(--index) * 0.63);
        }
      }
      &-description {
        font-weight: 700;
        font-size: calc(var(--index) * 0.63);
        span {
          font-weight: 200;
          font-size: calc(var(--index) * 0.63);
        }
      }
      &-price {
        font-weight: 700;
        font-size: calc(var(--index) * 1.09);
      }
    }
  }
`;
