import React, { Component } from "react";
import CartTotal from "./CartTotal";

class CartContainer extends Component {
  render() {
    return (
      <table>
        <tr>
          <th className="th-item total">
            <h4>Item</h4>
          </th>
          <th className="th-price total">
            <h4>Price</h4>
          </th>
        </tr>
        {this.props.cart.map((item) => {
          return (
            <tr>
              <td className="th-item">{item.name}</td>
              <td className="th-price">{item.price}</td>
            </tr>
          );
        })}
        <CartTotal cartTotal={this.props.cartTotal} />
      </table>
    );
  }
}

export default CartContainer;
