import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledItem } from '../../../styles/Item/Item';
import { Breds } from '../../common/Breds';

const Item = ({ cards }) => {
  const { id } = useParams();
  const elem = cards.find((item) => item.id === id);

  return (
    <StyledItem>
      <img src={elem.img} alt="item" className="left" />
      <div className="right">
        <div className="right-heading">About it</div>
        <Breds color="black" />
        <div className="right-info">
          <div className="right-info-country">
            Country:<span>{elem.country}</span>
          </div>
          <div className="right-info-name">
            Name:<span>{elem.name}</span>
          </div>
          <div className="right-info-description">
            Description:<span>{elem.description}</span>
          </div>
          <div className="right-info-price">Price:{elem.price}</div>
        </div>
      </div>
    </StyledItem>
  );
};

export default Item;
