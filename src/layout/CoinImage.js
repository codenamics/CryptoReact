import React from "react";

export default function({ coin, style }) {
  return (
    <img
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.Symbol}
      style={style || { height: "50px" }}
    />
  );
}
