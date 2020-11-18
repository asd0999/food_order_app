import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestuarantWidget from "./components/landingPage/RestuarantWidget";
import Header from "./components/landingPage/Header";
import SignIn1 from "./components/auth/SignIn1";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://zuber-eats-api.herokuapp.com/restaurants/")
      .then((data) => {
        this.setState({
          restaurants: data,
        });
      });
  }
  render() {
    console.log(this.state.restaurants);
    return (
      <div>
        {/* landing page */}
        <Switch>
          <Route exact path="/">
            <Header />
            <RestuarantWidget restaurants={this.state.restaurants} />
          </Route>
          {/* sign in */}
          <Route exact path="/sign-in">
            <SignIn1 />
          </Route>
        </Switch>
      </div>
    );
  }
}
