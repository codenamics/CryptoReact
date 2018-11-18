import React from "react";
import styled, { css } from "styled-components";
import { Tile } from "../layout/Tile";
import { fontSize3, fontSizeBig, BoxShadow } from "../styles/styles";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { AppContext } from "../AppProvider";

const JustifyLeft = styled.div`
  justify-self: center;
  align-self: center;
  font-size: 35px;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
  display:grid;

  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const numberFormat = number => {
  return +(number + "").slice(0, 7);
};

const ChangePctGreen = styled.div`
  color: #51ce65;
`;
const ChangePctRed = styled.div`
  color: red;
`;

const PriceTileStyled = styled(Tile)`
  display: grid;
  ${fontSize3}
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
  box-shadow: 0px 0px 20px 2px white;
  ${props =>
    props.currentFavorite &&
    css`
      ${BoxShadow}
      pointer-events:none;
    `}
    ${props =>
      props.dataDown &&
      css`
        box-shadow: 0px 0px 20px 2px red;
      `}
      ${props =>
        props.dataUp &&
        css`
          box-shadow: 0px 0px 20px 2px green;
        `}
        
`;

function ChangePercent({ data }) {
  return data.CHANGEPCT24HOUR < 0 ? (
    <ChangePctRed>
      <i class="fas fa-sort-down" />
      {numberFormat(data.CHANGEPCT24HOUR)}
    </ChangePctRed>
  ) : (
    <ChangePctGreen>
      <i class="fas fa-sort-up" />
      {numberFormat(data.CHANGEPCT24HOUR)}
    </ChangePctGreen>
  );
  //
}

function PriceTile({
  sym,
  data,
  dataEUR,
  currentFavorite,
  setCurrentFavorite
}) {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      currentFavorite={currentFavorite}
      dataDown={data.CHANGEPCT24HOUR < 0}
      dataUp={data.CHANGEPCT24HOUR > 0}
    >
      <JustifyLeft>{sym}</JustifyLeft>

      <TickerPrice>
        <div>USD</div>
        <div>
          <ChangePercent data={data} />$ {numberFormat(data.PRICE)}
        </div>
      </TickerPrice>
      <TickerPrice>
        <div>EUR</div>
        <div>
          {" "}
          <ChangePercent data={dataEUR} />
          &euro; {numberFormat(dataEUR.PRICE)}
        </div>
      </TickerPrice>
    </PriceTileStyled>
  );
}

export default function({ price }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  let dataEUR = price[sym]["EUR"];

  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <PriceTile
          sym={sym}
          data={data}
          dataEUR={dataEUR}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        />
      )}
    </AppContext.Consumer>
  );
}
