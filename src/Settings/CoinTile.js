import React from "react";
import { AppContext } from "../AppProvider";
import { SelectableTile } from "../layout/Tile";
import CoinGrid from "./CoinGrid";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../layout/CoinImage";

export default function({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
