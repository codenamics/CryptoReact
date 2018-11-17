import React from "react";
import highchartsconfig from "./HighchartsConfig";
import { Tile } from "../layout/Tile";
import { AppContext } from "../AppProvider";
import ReactHighcharts from "react-highcharts";

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighcharts config={highchartsconfig(historical)} />
          ) : (
            <div>Loading data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
