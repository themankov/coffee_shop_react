import styled from 'styled-components';
export const StyledSearchPanel = styled.div`
  width: 100%;
  margin-top: calc(var(--index) * 2.7);

  .search-form {
    justify-content: center;
    display: flex;
    gap: calc(var(--index) * 3.6);
    @media (max-width: 420px) {
      flex-direction: column;
      margin-left: calc(var(--index) * 3.6);
    }
    .looking-for {
      align-items: center;
      display: flex;
      gap: calc(var(--index) * 0.9);

      .looking-for-text {
        font-family: 'Montserrat';
        font-style: italic;
        font-size: calc(var(--index) * 0.64);
      }
      .looking-for-input {
        width: calc(var(--index) * 8.1);
        height: calc(var(--index) * 1.4);
        border: none;
        padding: calc(var(--index) * 0.45) calc(var(--index) * 1.6);
        border-radius: 4px;
        box-shadow: 0.4px 0.4px 20px rgba(0, 0, 0, 0.5);
        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-size: calc(var(--index) * 0.7);
          font-family: 'Montserrat';
          font-style: italic;
        }
      }
    }
    .filter-form {
      display: flex;
      align-items: center;
      gap: calc(var(--index) * 1.36);
      .filter-form-text {
        font-family: 'Montserrat';
        font-style: italic;
        font-size: calc(var(--index) * 0.64);
      }
      .filter-form-items {
        display: flex;
        gap: calc(var(--index) * 0.223);
        .filter-form-item {
          cursor: pointer;
          border: none;
          border-radius: 4px;
          box-shadow: 0.4px 0.4px 20px rgba(0, 0, 0, 0.5);
          padding: calc(var(--index) * 0.45) calc(var(--index) * 0.9);
        }
        .active {
          background-color: red;
        }
      }
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--index) * 3.2);
    border: none;
    border-radius: 4px;
    justify-content: flex-start;
    margin: calc(var(--index) * 2.27) calc(var(--index) * 10) 0;
    @media (max-width: 825px) {
      justify-content: center;
    }
    .card {
      width: calc(var(--index) * 10);
      min-height: calc(var(--index) * 11.8);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
      display: flex;
      text-decoration: none;
      color: black;
      flex-direction: column;
      cursor: pointer;
      padding: calc(var(--index) * 1.6) calc(var(--index) * 1.2)
        calc(var(--index) * 1.2);
      gap: calc(var(--index) * 0.68);
      img {
        width: calc(var(--index) * 7.59);
        height: calc(var(--index) * 5.22);
        object-fit: cover;
      }
      .&-title {
        font-size: calc(var(--index) * 0.63);
        font-family: 'Merienda';
      }
      &-country {
        font-size: calc(var(--index) * 0.63);
        font-family: 'Merienda';
        text-align: end;
      }
      &-price {
        font-size: calc(var(--index) * 0.63);
        font-family: 'Merienda';
        font-weight: bold;
        text-align: end;
      }
    }
  }
`;
