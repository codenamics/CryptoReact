import React, { Component } from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import AppBar from "./layout/AppBar";
import { AppProvider } from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <h1>Hello</h1>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
