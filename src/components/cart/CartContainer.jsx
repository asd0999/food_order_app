import React, { Component } from "react";
import CartTotal from "./CartTotal";

class CartContainer extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
          {this.props.cart.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          <CartTotal cartTotal={this.props.cartTotal} />
        </table>
      </div>
    );
  }
}

export default CartContainer;
