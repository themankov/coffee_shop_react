import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSearchPanel } from '../../styles/OurCoffeeSection/SearchPanel';
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }
  onCheckPath = (e) => {
    if (window.location.pathname.startsWith('/pleasure')) {
      this.setState({
        disabled: true,
      });
      e.preventDefault();
    }
  };

  render() {
    let card = this.props.visibleData.map((item) => {
      return (
        <NavLink to={item.id} onClick={this.onCheckPath} className="card">
          <img src={`.${process.env.PUBLIC_URL}${item.img}`} alt="card" />
          <div className="card-title">{item.name}</div>
          <div className="card-country">{item.country}</div>
          <div className="card-price">{item.price}</div>
        </NavLink>
      );
    });
    return (
      <StyledSearchPanel>
        <div className="cards">{card}</div>
      </StyledSearchPanel>
    );
  }
}
export default Cards;
