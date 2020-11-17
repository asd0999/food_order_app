import React, { Component } from "react";
import RestuarantWidget from "./components/RestuarantWidget";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restuarants: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <RestuarantWidget />
      </div>
    );
  }
}
