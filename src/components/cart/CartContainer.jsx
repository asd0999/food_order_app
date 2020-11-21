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
          <th></th>
        </tr>
        {this.props.cart.map((item, index) => {
          return (
            <tr>
              <td className="th-item">{item.name}</td>
              <td className="th-price">{item.price}</td>
              <td>
                <button
                  onClick={() => this.props.deleteCartItem(item.price, index)}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
        <CartTotal cartTotal={this.props.cartTotal} />
      </table>
    );
  }
}

export default CartContainer;
