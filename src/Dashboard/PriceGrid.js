import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 0;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices.map((price, index, coinList) => (
            <PriceTile
              key={index}
              price={price}
              index={index}
              coinList={coinList}
            />
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
