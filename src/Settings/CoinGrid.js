import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../AppProvider";

import CoinTile from "./CoinTile";
export const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;
function getCoinsToDispaly(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGrid>
          {getCoinsToDispaly(coinList, topSection, favorites).map(coinKey => (
            <CoinTile topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGrid>
      )}
    </AppContext.Consumer>
  );
}
