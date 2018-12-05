import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomepageContainer from "./react/components/homepage/Homepage_container";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageContainer />
      </div>
    );
  }
}

export default App;
