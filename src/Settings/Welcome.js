import React from "react";
import { AppContext } from "../AppProvider";
export default function Welcome(firstTime) {
  return (
    <AppContext.Consumer>
      {({ firstTime }) =>
        firstTime ? (
          <div>Welcome, please select your favorite CryptoCoins</div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
