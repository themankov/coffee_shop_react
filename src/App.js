import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NoMatch from './components/common/NoMatch';
import OurCoffeeSection from './components/OurCoffeeSection/OurCoffeeSection';
import OurPleasure from './components/ourPleasureSection/OurPleasureSection';
import { GlobalStyle } from './styles/CommonStyles';
import Item from './components/OurCoffeeSection/Item/Item';

import AboutUs from './components/common/AboutUs';
import SearchPanel from './components/OurCoffeeSection/SearchPanel/SearchPanel';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationData: [
        { item: 'Coffee house', id: '01', link: '/' },
        { item: 'Our coffee', id: '02', link: '/our_coffee' },
        { item: 'For your pleasure', id: '03', link: '/pleasure' },
      ],
      mainPage: {
        cards: [
          {
            img: '/img/card1.png',
            description: 'Solimo Coffee Beans 2 kg',
            price: '10.73$',
          },
          {
            img: '/img/card2.png',
            description: 'Presto Coffee Beans 1 kg',
            price: '15.99$',
          },
          {
            img: '/img/card3.png',
            description: 'AROMISTICO Coffee 1 kg',
            price: '6.99$',
          },
        ],
      },
      ourCoffeePage: {
        cards: [
          {
            img: '/img/ourCoffee/card.png',
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: '6.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            id: '01',
          },
          {
            img: '/img/ourCoffee/card.png',
            name: 'Lebo Coffee 1 kg',
            country: 'Kenya',
            price: '16.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
            id: '02',
          },
          {
            img: '/img/ourCoffee/card.png',
            name: 'Starhit coffee 1 kg',
            country: 'Columbia',
            price: '26.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            id: '03',
          },
          {
            img: '/img/ourCoffee/card.png',
            name: 'Oneprice coffee 1 kg',
            country: 'Columbia',
            price: '36.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            id: '04',
          },
          {
            img: '/img/ourCoffee/card.png',
            name: 'Ramen Coffee 1 kg',
            country: 'Columbia',
            price: '46.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            id: '05',
          },
          {
            img: '/img/ourCoffee/card.png',
            name: 'DarkLight coffee 1 kg',
            country: 'Columbia',
            price: '56.99$',
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
            id: '06',
          },
        ],
        filterItems: [
          { name: 'Brazil', id: '1' },
          { name: 'Kenya', id: '2' },
          { name: 'Columbia', id: '3' },
        ],
        activeLink: '',

        inputText: '',
      },
      Pages: [
        {
          pathname: '/pleasure',
          name: 'For your pleasure',
        },
        {
          pathname: '/our_coffee',
          name: 'Our Coffee',
        },
      ],
    };
  }
  findPathName = (pathname) => {
    if (pathname === '/') return;
    let variant = this.state.Pages.find((item) => {
      return pathname.startsWith(item.pathname) === true;
    });
    return variant.name;
  };
  onToggle = async (name) => {
    await this.setState((state) => ({
      ourCoffeePage: {
        ...state.ourCoffeePage,
        activeLink: name,
      },
    }));
  };
  onUpdateSearch = async (word) => {
    debugger;
    await this.setState((state) => ({
      ourCoffeePage: {
        ...state.ourCoffeePage,
        inputText: word.length > 0 ? word[0].toUpperCase() + word.slice(1) : '',
      },
    }));
  };

  onSearchTerm = (data, word) => {
    if (word.length === 0) {
      return data;
    } else {
      return data.filter((item) => item.name.startsWith(word) === true);
    }
  };
  onFilter = (data, filter) => {
    if (!filter) return data;
    return data.filter((item) => item.country === filter);
  };

  render() {
    let visibleData = this.onFilter(
      this.onSearchTerm(
        this.state.ourCoffeePage.cards,
        this.state.ourCoffeePage.inputText
      ),
      this.state.ourCoffeePage.activeLink
    );
    return (
      <Router>
        <GlobalStyle />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                state={this.state}
                page={'mainPage'}
                findName={this.findPathName.bind(this)}
              />
            }
          />
          <Route
            path="/our_coffee"
            element={
              <OurCoffeeSection
                state={this.state}
                findName={this.findPathName.bind(this)}
              />
            }
          >
            <Route
              index
              element={
                <>
                  <AboutUs src={'/img/ourCoffee/logo.png'} />
                  <SearchPanel
                    filterItems={this.state.ourCoffeePage.filterItems}
                    activeLink={this.state.ourCoffeePage.activeLink}
                    onToggle={this.onToggle.bind(this)}
                    onUpdateSearch={this.onUpdateSearch.bind(this)}
                    visibleData={visibleData}
                  />
                </>
              }
            />
            <Route
              path=":id"
              element={<Item cards={this.state.ourCoffeePage.cards} />}
            />
          </Route>
          <Route
            path="pleasure"
            element={
              <OurPleasure
                state={this.state}
                visibleData={visibleData}
                findName={this.findPathName.bind(this)}
              />
            }
          ></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Footer data={this.state.navigationData} />
      </Router>
    );
  }
}
export default App;
