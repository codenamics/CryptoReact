import React, { Component } from "react";
import _ from "lodash";
const cc = require("cryptocompare");

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: [],
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins
    };
  }

  isInFavorites = key => _.includes(this.state.favorites, key);
  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({
        favorites
      });
    }
  };
  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({
      favorites: _.pull(favorites, key)
    });
  };
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  };
  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({
      coinList
    });
  };
  confirmFavorites = () => {
    this.setPage(
      {
        firstTime: false,
        page: "dashboard"
      },
      () => {
        this.fetchPrices();
      }
    );
    localStorage.setItem(
      "cryptoData",
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
    console.log(this.state.favorites);
  };

  savedSettings() {
    let cryptoData = JSON.parse(localStorage.getItem("cryptoData"));
    if (!cryptoData) {
      return {
        page: "settings",
        firstTime: true
      };
    }
    const { favorites } = cryptoData;
    return {
      favorites
    };
  }
  setPage = page =>
    this.setState({
      page
    });

  setFilteredCoins = filteredCoins => {
    this.setState({
      filteredCoins
    });
  };
  fetchPrices = async () => {
    if (this.state.firstTime) return;
    let prices = await this.prices();

    this.setState({ prices });
    console.log(this.state.prices);
  };
  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");

        returnData.push(priceData);
      } catch (e) {
        console.warn("Fetch price error ", e);
      }
    }
    return returnData;
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {" "}
        {this.props.children}{" "}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
