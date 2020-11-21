import React, { Component } from "react";

export default class CartTotal extends Component {
  render() {
    return (
      <tr className="tr-total total">
        <td className="total">
          <h4>Total:</h4>
        </td>
        <td className="total">
          <h4>{this.props.cartTotal}</h4>
        </td>
      </tr>
    );
  }
}
