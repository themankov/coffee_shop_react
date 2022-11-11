import React from 'react';
import { Component } from 'react';

import { StyledSearchPanel } from '../../../styles/OurCoffeeSection/SearchPanel';
import Cards from '../../common/Cards';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      activeLink: '',
    };
  }

  onToggleSelected = (name) => {
    if (this.state.activeLink === name) {
      this.setState({ activeLink: '' });
      return this.props.onToggle('');
    }
    this.setState({ activeLink: name });
    this.props.onToggle(name);
  };
  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onUpdateSearch(value);
  };

  render() {
    return (
      <StyledSearchPanel>
        <div className="search-form">
          <div className="looking-for">
            <div className="looking-for-text">Looking for</div>
            <input
              className="looking-for-input"
              placeholder="start typing here..."
              value={this.state.value}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="filter-form">
            <div className="filter-form-text">Or filter</div>
            <div className="filter-form-items">
              {this.props.filterItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      this.state.activeLink === item.name
                        ? 'filter-form-item active'
                        : 'filter-form-item'
                    }
                    onClick={() => {
                      this.onToggleSelected(item.name);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Cards visibleData={this.props.visibleData} />
      </StyledSearchPanel>
    );
  }
}
export default SearchPanel;
