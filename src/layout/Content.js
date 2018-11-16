import React from "react";
import { AppContext } from "../AppProvider";
export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstTime }) => {
        if (!coinList) {
          return <div>Loading</div>;
        }
        if (!firstTime && !prices) {
          return <div>Loading prices</div>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
