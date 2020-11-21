import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantWidgetContainer from "./components/landingPage/RestaurantWidgetContainer";
import Header from "./components/landingPage/Header";
import LogIn from "./components/auth/LogIn";
import Banner from "./components/landingPage/Banner";
import MenuItemWidgetContainer from "./components/restaurantMenu/MenuItemWidgetContainer";
import CartContainer from "./components/cart/CartContainer";

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
      cart: [],
      cartTotal: 0,
      itemsInCart_id: [],
    };

    this.updateStateUI = this.updateStateUI.bind(this);
    this.updateStateRI = this.updateStateRI.bind(this);
    this.sendRestaurant = this.sendRestaurant.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
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
    setTimeout(this.sendRestaurant, 100);
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

  updateCart(item) {
    const updatedCart = [...this.state.cart, item];
    let updatedTotal = this.state.cartTotal;
    updatedTotal += item.price;

    const updatedItemsInCart_id = [
      ...this.state.itemsInCart_id,
      { item_id: item._id, quantity: 1 },
    ];

    this.setState({
      cart: updatedCart,
      cartTotal: updatedTotal,
      itemsInCart_id: updatedItemsInCart_id,
    });
  }

  emptyCart() {
    this.setState({
      cart: [],
      cartTotal: 0,
      itemsInCart_id: [],
    });
  }

  deleteCartItem(price, index) {
    const updated = this.state.cart;
    updated.splice(index, 1);
    let updatedTotal = this.state.cartTotal - price;
    console.log("price", typeof price);

    this.setState({
      cart: updated,
      cartTotal: updatedTotal,
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
        <Header
          user_name={this.state.user_name}
          forgetRestaurant={this.forgetRestaurant}
        />
        {/* landing page */}
        <Switch>
          <Route exact path="/" component={(Banner, RestaurantWidgetContainer)}>
            <Banner />
            <RestaurantWidgetContainer
              restaurants={this.state.restaurants}
              restaurant_id={this.state.restaurant_id}
              user_id={this.state.user_id}
              updateStateRI={this.updateStateRI}
              emptyCart={this.emptyCart}
            />
          </Route>
          {/* sign in */}
          <Route exact path="/sign-in" component={LogIn}>
            <LogIn updateStateUI={this.updateStateUI} />{" "}
          </Route>
          <Route
            exact
            path="/r/:restaurant_name"
            component={(MenuItemWidgetContainer, CartContainer)}
          >
            <h1 style={{ width: "100%", marginLeft: "40px" }}>
              Welcome to{" "}
              {this.state.restaurant_name && this.state.restaurant_name}
            </h1>
            <div className="menu-view">
              <MenuItemWidgetContainer
                restaurant={
                  this.state.restaurants[this.state.current_restaurant_index]
                }
                updateCart={this.updateCart}
              />
              <CartContainer
                user_id={this.state.user_id}
                user_name={this.state.user_name}
                cartTotal={this.state.cartTotal}
                cart={this.state.cart}
                deleteCartItem={this.deleteCartItem}
                itemsInCart_id={this.state.itemsInCart_id}
                emptyCart={this.emptyCart}
              />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}
