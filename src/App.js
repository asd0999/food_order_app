import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantWidgetContainer from "./components/homePage/RestaurantWidgetContainer";
import Header from "./components/homePage/Header";
import LogIn from "./components/auth/LogIn";
import Banner from "./components/homePage/Banner";
import MenuItemWidgetContainer from "./components/restaurantMenu/MenuItemWidgetContainer";
import CartContainer from "./components/cart/CartContainer";
import AccountDetails from "./components/myAccount/AccountDetails";
import PastOrders from "./components/myAccount/PastOrders";
import RestaurantInfo from "./components/homePage/RestaurantInfo";
import Welcome from "./components/landingPage/Welcome";
import Modal from "./components/modal/modal";
import CartUpdateContainer from "./components/cart/CartUpdateContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      user_id: "",
      user_name: "",
      restaurant_id: "",
      restaurant_name: "",
      restaurant_street: "",
      restaurant_zip: "",
      restaurant_phone: "",
      restaurant_img: "",
      restaurant_apt: "",
      current_restaurant_index: -1,
      cart: [],
      cartTotal: 0,
      itemsInCart_id: [],
      userDetails: [],
      pastOrders: [],
      delivery: true,
      showModal: false,
      modalText: [
        "Your Order Has Been Placed!",
        "Order Has Been Updated!",
        "Order Has Been Canceled!",
      ],
      modalTextIndex: -1,
    };

    this.updateStateUI = this.updateStateUI.bind(this);
    this.updateStateRI = this.updateStateRI.bind(this);
    this.sendRestaurant = this.sendRestaurant.bind(this);
    this.populateRestaurant = this.populateRestaurant.bind(this);
    this.populateCartForUpdating = this.populateCartForUpdating.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
    this.getPastOrders = this.getPastOrders.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
    this.updateDelivery = this.updateDelivery.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCartItemFirstIndex = this.deleteCartItemFirstIndex.bind(this);
  }

  updateStateUI(ui, un) {
    this.setState({
      user_id: ui,
      user_name: un,
    });
  }
  updateStateRI(ri, rn, rStreet, rZip, rPhone, rImg, rApt) {
    console.log(ri, rn);
    this.setState({
      restaurant_id: ri,
      restaurant_name: rn,
      restaurant_street: rStreet,
      restaurant_zip: rZip,
      restaurant_phone: rPhone,
      restaurant_img: rImg,
      restaurant_apt: rApt,
    });
    setTimeout(this.sendRestaurant, 100);
  }

  sendRestaurant() {
    // console.log("hello");
    // console.log(this.state.restaurant_id);
    this.state.restaurants.forEach((r) => {
      // console.log(r._id);
      if (r._id === this.state.restaurant_id) {
        // console.log("found it!");
        const index = this.state.restaurants.indexOf(r);
        this.setState({ current_restaurant_index: index });
      } else {
        // console.log("didnt find");
      }
    });
  }

  populateRestaurant(rn) {
    this.state.restaurants.forEach((r) => {
      if (r.restaurantName === rn) {
        const index = this.state.restaurants.indexOf(r);
        this.setState({ current_restaurant_index: index });
      } else {
      }
    });
    setTimeout(() => {
      const r = this.state.restaurants[this.state.current_restaurant_index];
      console.log(r);
      this.updateStateRI(
        r._id,
        r.restaurantName,
        r.streetname,
        r.zipcode,
        r.phoneNumber,
        r.imgUrl,
        r.apartmentNumber
      );
    }, 100);

    // (ri, rn, rStreet, rZip, rPhone, rImg, rApt)
  }

  updateCart(item) {
    console.log(item);
    const updatedCart = [...this.state.cart, item];
    let updatedTotal = this.state.cartTotal;
    updatedTotal += item.price;

    console.log(item);

    const updatedItemsInCart_id = [
      ...this.state.itemsInCart_id,
      {
        item_id: item._id,
        quantity: 1,
        price: item.price,
        item_name: item.name,
      },
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
      delivery: true,
    });
  }

  deleteCartItem(price, index) {
    // console.log(index);
    const updated = this.state.cart;
    // console.log(updated);
    updated.splice(index, 1);
    // console.log(updated);
    let updatedTotal = this.state.cartTotal - price;
    // console.log("price", typeof price);

    const updatedItemsInCart = this.state.itemsInCart_id;
    updatedItemsInCart.splice(index, 1);

    this.setState({
      cart: updated,
      cartTotal: updatedTotal,
      itemsInCart_id: updatedItemsInCart,
    });
  }

  deleteCartItemFirstIndex(price, index) {
    // console.log(index);
    const updated = this.state.cart;
    // console.log(updated);
    updated.splice(index, 1);
    // console.log(updated);
    let updatedTotal = this.state.cartTotal - price;
    // console.log("price", typeof price);

    // const updatedItemsInCart = this.state.itemsInCart_id;
    // updatedItemsInCart.splice(index, 1);

    this.setState({
      cart: updated,
      cartTotal: updatedTotal,
      // itemsInCart_id: updatedItemsInCart,
    });
  }

  updateDelivery(val) {
    this.setState({
      delivery: val,
    });
  }

  getUserDetails() {
    fetch("https://zuber-eats-api.herokuapp.com/users/" + this.state.user_id)
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        // console.log(parsedData);
        this.setState({
          userDetails: parsedData,
        });
      });
  }

  getPastOrders() {
    fetch(
      "https://zuber-eats-api.herokuapp.com/orders/" +
        this.state.user_id +
        "/history"
    )
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        this.setState({
          pastOrders: parsedData,
        });
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

  showModal(index) {
    this.setState({
      showModal: true,
      modalTextIndex: index,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  populateCartForUpdating(itemsInOrder) {
    let items = itemsInOrder.itemsInOrder;
    console.log(items);
    let updatedTotal = 0;
    for (let item of items) {
      updatedTotal += item.price;
    }

    this.setState({
      cart: items,
      cartTotal: updatedTotal,
      itemsInCart_id: items,
    });
  }

  render() {
    // console.log(this.state.restaurants);
    return (
      <>
        <Header
          user_name={this.state.user_name}
          forgetRestaurant={this.forgetRestaurant}
          user_id={this.state.user_id}
          getUserDetails={this.getUserDetails}
          getPastOrders={this.getPastOrders}
        />
        {this.state.showModal ? (
          <Modal
            modalText={this.state.modalText}
            modalTextIndex={this.state.modalTextIndex}
            closeModal={this.closeModal}
            emptyCart={this.emptyCart}
          />
        ) : null}
        <Switch>
          {/* landing page */}
          <Route exact path="/" component={Welcome}>
            <Welcome />
          </Route>

          {/* sign in */}
          <Route exact path="/sign-in" component={LogIn}>
            <LogIn updateStateUI={this.updateStateUI} />{" "}
          </Route>
          {/* home page */}
          <Route
            exact
            path="/home"
            component={(Banner, RestaurantWidgetContainer)}
          >
            <Banner />
            <RestaurantWidgetContainer
              restaurants={this.state.restaurants}
              restaurant_id={this.state.restaurant_id}
              user_id={this.state.user_id}
              updateStateRI={this.updateStateRI}
              emptyCart={this.emptyCart}
            />
          </Route>

          {/* menu view */}
          <Route
            exact
            path="/r/:restaurant_name"
            component={(Banner, MenuItemWidgetContainer, CartContainer)}
          >
            <RestaurantInfo
              restaurant_name={this.state.restaurant_name}
              restaurant_street={this.state.restaurant_street}
              restaurant_zip={this.state.restaurant_zip}
              restaurant_phone={this.state.restaurant_phone}
              restaurant_img={this.state.restaurant_img}
              restaurant_apt={this.state.restaurant_apt}
            />
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
                updateDelivery={this.updateDelivery}
                delivery={this.state.delivery}
                closeModal={this.closeModal}
                showModal={this.showModal}
                restaurant_name={this.state.restaurant_name}
              />
            </div>
          </Route>

          {/* update order */}
          <Route
            exact
            path="/r/:restaurant_name/editorder"
            component={(Banner, MenuItemWidgetContainer, CartContainer)}
          >
            <RestaurantInfo
              restaurant_name={this.state.restaurant_name}
              restaurant_street={this.state.restaurant_street}
              restaurant_zip={this.state.restaurant_zip}
              restaurant_phone={this.state.restaurant_phone}
              restaurant_img={this.state.restaurant_img}
              restaurant_apt={this.state.restaurant_apt}
            />
            <div className="menu-view">
              <MenuItemWidgetContainer
                restaurant={
                  this.state.restaurants[this.state.current_restaurant_index]
                }
                updateCart={this.updateCart}
              />
              <CartUpdateContainer
                user_id={this.state.user_id}
                user_name={this.state.user_name}
                cartTotal={this.state.cartTotal}
                cart={this.state.cart}
                deleteCartItem={this.deleteCartItem}
                itemsInCart_id={this.state.itemsInCart_id}
                emptyCart={this.emptyCart}
                updateDelivery={this.updateDelivery}
                delivery={this.state.delivery}
                closeModal={this.closeModal}
                showModal={this.showModal}
                restaurant_name={this.state.restaurant_name}
                itemsInOrder={this.state.pastOrders[0]}
                populateCartForUpdating={this.populateCartForUpdating}
                deleteCartItemFirstIndex={this.deleteCartItemFirstIndex}
              />
            </div>
          </Route>

          {/* my account */}
          <Route
            exact
            path="/u/:user_id"
            component={(Banner, AccountDetails, PastOrders)}
          >
            <div className="myaccount-container">
              <AccountDetails userDetails={this.state.userDetails} />
              <PastOrders
                pastOrders={this.state.pastOrders}
                populateRestaurant={this.populateRestaurant}
                restaurant={
                  this.state.restaurants[this.state.current_restaurant_index]
                }
              />
            </div>
          </Route>
        </Switch>
      </>
    );
  }
}
