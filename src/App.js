import React, { Component } from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import AppBar from "./layout/AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "./Settings";
import Content from "./layout/Content";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>{" "}
        </AppProvider>{" "}
      </AppLayout>
    );
  }
}

export default App;
