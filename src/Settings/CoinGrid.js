import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";

import CoinTile from "./CoinTile";
export const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
}

function getCoinsToDispaly(coinList, topSection, favorites, filteredCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGrid>
          {getCoinsToDispaly(
            coinList,
            topSection,
            favorites,
            filteredCoins
          ).map(coinKey => (
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGrid>
      )}
    </AppContext.Consumer>
  );
}
