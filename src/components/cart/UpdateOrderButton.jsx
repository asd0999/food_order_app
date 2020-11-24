import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickUpdate() {
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

  handleClickDelete() {
    let order_id = this.props.lastOrder._id;
    console.log(order_id);
    fetch("https://zuber-eats-api.herokuapp.com/orders/" + order_id, {
      method: "DELETE",
    })
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
        <button id="update-button" onClick={this.handleClickUpdate}>
          Update order
        </button>
        <button id="delete-button" onClick={this.handleClickDelete}>
          Cancel order
        </button>
      </div>
    );
  }
}
