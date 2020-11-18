import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestuarantWidget from "./components/landingPage/RestuarantWidget";
import Header from "./components/landingPage/Header";
import SignIn1 from "./components/auth/SignIn1";
import Banner from "./components/landingPage/Banner";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetch("http://zuber-eats-api.herokuapp.com/restaurants/")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          restaurants: parsedData,
        });
      });
  }
  render() {
    // console.log(this.state.restaurants);
    return (
      <div>
        {/* landing page */}
        <Switch>
          <Route exact path="/" component={(Header, RestuarantWidget)}>
            <Header />
            <Banner />
            <RestuarantWidget restaurants={this.state.restaurants} />
          </Route>
          {/* sign in */}
          <Route exact path="/sign-in" component={SignIn1}>
            <SignIn1 />
          </Route>

          <Route>{/* Claire's part */}</Route>
        </Switch>
      </div>
    );
  }
}
