import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../styles/styles";
import { AppContext } from "../AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${fontSize2}
  border: 1px solid
  height: 25px;
  color: #000;
  place-self: center left;
`;
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResult = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    console.log(symKey);
    return _.includes(fuzzyResult, symKey) || _.includes(fuzzyResult, coinName);
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 500);

function filteredCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            onKeyUp={e => filteredCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
