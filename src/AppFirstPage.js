import React, { Component } from "react";
import { Route } from "react-router-dom";
import RestuarantWidget from "./components/landingPage/RestuarantWidget";
import FoodItems from "./components/landingPage/FoodItems";
import Header from "./components/landingPage/Header";
import SignIn1 from "./components/auth/SignIn1";

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
        {/* landing page */}
        <Route exact path="/">
          <Header />
          <RestuarantWidget />
        </Route>
        {/* sign in */}
        <Route exact path="/sign-in">
          <SignIn1 />
        </Route>
      </div>
    );
  }
}
