import React from "react";
import { AppContext } from "../AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../layout/Tile";
import CoinGrid from "./CoinGrid";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../layout/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }
        return (
          <TileClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
          >
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
