import React, { Component } from "react";

export default class CartTotal extends Component {
  render() {
    return (
      <tr>
        <td>Total:</td>
        <td>{this.props.cartTotal}</td>
      </tr>
    );
  }
}
