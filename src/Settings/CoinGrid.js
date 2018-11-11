import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../AppProvider";

import CoinTile from "./CoinTile";
export const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;
function getCoinsToDispaly(coinList) {
  return Object.keys(coinList).slice(0, 100);
}
export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGrid>
          {getCoinsToDispaly(coinList).map(coinKey => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGrid>
      )}
    </AppContext.Consumer>
  );
}
