import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantWidgetContainer from "./components/landingPage/RestaurantWidgetContainer";
import Header from "./components/landingPage/Header";
import SignIn1 from "./components/auth/SignIn1";
import Banner from "./components/landingPage/Banner";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      user_id: "",
      restaurant_id: ""
    };

    this.updateState = this.updateState.bind(this)
  }

    updateState(ui, ri) {
      this.setState({
        user_id: ui, 
        restaurant_id: ri,
      })
    }

  componentDidMount() {
    fetch("https://zuber-eats-api.herokuapp.com/restaurants/")
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
    console.log(this.state.restaurants);
    return (
      <div>
        <Header />
        {/* landing page */}
        <Switch>
          <Route exact path="/" component={Banner, RestaurantWidgetContainer}>
            <Banner />
            <RestaurantWidgetContainer restaurants={this.state.restaurants} restaurant_id={this.state.restaurant_id} user_id={this.state.user_id} updateState={this.updateState}/>
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