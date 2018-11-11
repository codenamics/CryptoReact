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
      isInFavorites: this.isInFavorites
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
    this.setState({ favorites: _.pull(favorites, key) });
  };
  componentDidMount = () => {
    this.fetchCoins();
  };
  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({
      coinList
    });
  };
  confirmFavorites = () => {
    this.setPage({
      firstTime: false,
      page: "dashboard"
    });
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
    return { favorites };
  }
  setPage = page =>
    this.setState({
      page
    });
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
