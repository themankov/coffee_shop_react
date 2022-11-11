import React from 'react';
import { OurBestStyle } from '../../../styles/MainPage/OurBest';

export const OurBest = ({ data }) => {
  const card = data.map((item) => {
    return (
      <div className="card-wrapper">
        <div className="card__img">
          <img src={`.${process.env.PUBLIC_URL}${item.img}`} alt="card" />
        </div>

        <div className="card__description">{item.description}</div>
        <div className="card__price">{item.price}</div>
      </div>
    );
  });
  return (
    <OurBestStyle>
      <h1>Our Best</h1>
      <div className="cards-wrapper">{card}</div>
    </OurBestStyle>
  );
};
