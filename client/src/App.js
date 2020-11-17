import React, { Component } from "react";
import RestuarantWidget from "./components/RestuarantWidget";
import FoodItems from "./components/FoodItems";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Food order app</h1>
        <RestuarantWidget />
        <FoodItems />
      </div>
    );
  }
}
