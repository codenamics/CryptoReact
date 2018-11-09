import React, { Component } from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import AppBar from "./layout/AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "./Settings";
class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>{" "}
      </AppLayout>
    );
  }
}

export default App;
