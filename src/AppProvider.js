import React, { Component } from "react";
import _ from "lodash";
import moment from "moment";
const cc = require("cryptocompare");

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
const TIME_UNITS = 12;
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: [],
      ...this.savedSettings(),
      setPage: this.setPage,

      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setCurrentFavorite: this.setCurrentFavorite,
      setFilteredCoins: this.setFilteredCoins
    };
  }
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  };

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

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({
      coinList
    });
  };
  fetchHistorical = async () => {
    if (this.state.firstTime) return;
    let results = await this.historical();
    let historical = [
      {
        type: "areaspline",
        color: {
          linearGradient: { x1: 0, x2: 2, y1: 1, y2: 1 },
          stops: [[0, "green"], [1, "blue"]]
        },
        fillColor: " none",
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({
              months: TIME_UNITS - index
            })
            .valueOf(),
          ticker.USD
        ])
      }
    ];
    this.setState({
      historical
    });
  };
  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ["USD"],
          moment()
            .subtract({
              months: units
            })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstTime: false,
        page: "dashboard",
        currentFavorite,
        prices: null,
        historical: null
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "cryptoData",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      })
    );
    console.log(this.state.favorites);
  };
  setCurrentFavorite = sym => {
    this.setState(
      {
        currentFavorite: sym,
        historical: null
      },
      this.fetchHistorical
    );
    localStorage.setItem(
      "cryptoData",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoData")),
        currentFavorite: sym
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
    }
    const { favorites, currentFavorite } = cryptoData;
    return {
      favorites,
      currentFavorite
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

    this.setState({
      prices
    });
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
