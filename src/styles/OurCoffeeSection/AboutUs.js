import styled from 'styled-components';
export const StyledAboutUs = styled.div`
  width: 100%;
  header: calc(var(--index) * 22);
  .content {
    margin: calc(var(--index) * 2) auto;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: calc(var(--index) * 3.6);
    @media (max-width: 550px) {
      flex-direction: column;
    }

    .content-left {
      width: calc(var(--index) * 12.3);
      header: calc(var(--index) * 16);
      object-fit: cover;
    }
    .content-right {
      .content-right-heading {
        font-family: 'Merienda';
        text-align: center;
        font-style: italic;
        font-weight: bold;
        font-size: calc(var(--index) * 1.09);
      }
      .content-right-text {
        font-style: italic;
        font-size: calc(var(--index) * 0.6);
        font-family: 'Merienda';
        text-align: center;
      }
    }
  }
  .line {
    margin: 0 auto;
    width: calc(var(--index) * 10.9);
    background-color: black;
    height: 0.2rem;
  }
`;
