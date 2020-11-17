import React, { Component } from "react";
import RestuarantWidget from "./components/RestuarantWidget";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Food order app</h1>
        <RestuarantWidget />
      </div>
    );
  }
}
