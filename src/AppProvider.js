import React, { Component } from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }
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
        test: "hello"
      })
    );
  };
  savedSettings() {
    let cryptoData = JSON.parse(localStorage.getItem("cryptoData"));
    if (!cryptoData) {
      return {
        page: "settings",
        firstTime: true
      };
      return {};
    }
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
