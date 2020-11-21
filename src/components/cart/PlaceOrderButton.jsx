import React, { Component } from "react";

export default class PlaceOrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("http://localhost:3030/orders/" + this.props.user_id + "/new", {
      method: "POST",
      body: JSON.stringify({
        user_id: this.props.user_id,
        order: [
          {
            item_id: "fries",
            quantity: 1,
          },
          {
            item_id: "checkn_nuggets",
            quantity: 1,
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
    return (
      <div className="order-button-container">
        <button onClick={this.handleClick}>Place order!</button>
      </div>
    );
  }
}
