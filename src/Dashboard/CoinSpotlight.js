import React from "react";
import styled, { css } from "styled-components";
import { Tile } from "../layout/Tile";
import { AppContext } from "../AppProvider";
import CoinImage from "../layout/CoinImage";

const SpotlightName = styled.h2`
  text-align: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>
            Hello {coinList[currentFavorite].CoinName}
          </SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
