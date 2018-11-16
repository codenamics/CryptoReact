import React from "react";
import highchartsconfig from "./HighchartsConfig";
import { Tile } from "../layout/Tile";
import { AppContext } from "../AppProvider";
import ReactHighcharts from "react-highcharts";

export default function() {
  return (
    <AppContext.Consumer>
      {({}) => (
        <Tile>
          <ReactHighcharts config={highchartsconfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
