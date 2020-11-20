import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantWidgetContainer from "./components/landingPage/RestaurantWidgetContainer";
import Header from "./components/landingPage/Header";
import LogIn from "./components/auth/LogIn";
import Banner from "./components/landingPage/Banner";
import MenuItemWidgetContainer from "./components/restaurantMenu/MenuItemWidgetContainer";
import MenuItemWidget from "./components/restaurantMenu/MenuItemWidget";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      user_id: "",
      user_name: "",
      restaurant_id: "",
      restaurant_name: "",
      current_restaurant_index: -1,
    };

    this.updateStateUI = this.updateStateUI.bind(this);
    this.updateStateRI = this.updateStateRI.bind(this);
    this.sendRestaurant = this.sendRestaurant.bind(this);
  }

  updateStateUI(ui, un) {
    this.setState({
      user_id: ui,
      user_name: un,
    });
  }
  updateStateRI(ri, rn) {
    this.setState({
      restaurant_id: ri,
      restaurant_name: rn,
    });
  }

  componentDidUpdate() {
    if (this.state.current_restaurant_index == -1) {
      this.sendRestaurant();
    }
  }

  sendRestaurant() {
    console.log("hello");
    console.log(this.state.restaurant_id);
    this.state.restaurants.forEach((r) => {
      console.log(r._id);
      if (r._id === this.state.restaurant_id) {
        console.log("found it!");
        console.log(this.state.restaurants.indexOf(r));
        const index = this.state.restaurants.indexOf(r);
        this.setState({ current_restaurant_index: index });
      } else {
        console.log("didnt find");
      }
    });
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
        <Header user_name={this.state.user_name} />
        {/* landing page */}
        <Switch>
          <Route exact path="/" component={(Banner, RestaurantWidgetContainer)}>
            <Banner />
            <RestaurantWidgetContainer
              restaurants={this.state.restaurants}
              restaurant_id={this.state.restaurant_id}
              user_id={this.state.user_id}
              updateStateRI={this.updateStateRI}
            />
          </Route>
          {/* sign in */}
          <Route exact path="/sign-in" component={LogIn}>
            <LogIn updateStateUI={this.updateStateUI} />{" "}
          </Route>
          <Route
            exact
            path="/r/:restaurant_name"
            component={(MenuItemWidgetContainer, MenuItemWidget)}
          >
            <MenuItemWidgetContainer
              restaurant={
                this.state.restaurants[this.state.current_restaurant_index]
              }
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
