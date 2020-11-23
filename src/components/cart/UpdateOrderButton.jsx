import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(
      "https://zuber-eats-api.herokuapp.com/orders/" +
        this.props.user_id +
        "/new",
      {
        method: "POST",
        body: JSON.stringify({
          user_id: this.props.user_id,
          user_name: this.props.user_name,
          itemsInOrder: this.props.itemsInCart_id,
          delivery: this.props.delivery,
          restaurant_name: this.props.restaurant_name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
      });
    // this.props.emptyCart();
    this.props.showModal();
  }

  render() {
    return (
      <div className="order-button-container">
        <button onClick={this.handleClick}>Update order!</button>
      </div>
    );
  }
}

// this is test
