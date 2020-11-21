import React, { Component } from "react";
import CartTotal from "./CartTotal";
import PlaceOrderButton from "./PlaceOrderButton";

class CartContainer extends Component {
  render() {
    return (
      <div className="cart-container">
        <table>
          <tr>
            <th className="total" id="item-header">
              <h4>Item</h4>
              <div className="header-options-span">
                <select className="header-options">
                  <option value="">Delivery</option>
                  <option value="">Pickup</option>
                </select>
              </div>
            </th>
            <th className="th-price total">
              <h4>Price</h4>
            </th>
          </tr>
          {this.props.cart.map((item, index) => {
            return (
              <tr>
                <td className="th-item">
                  <div className="name-and-delete-div">
                    {item.name}
                    <button
                      onClick={() =>
                        this.props.deleteCartItem(item.price, index)
                      }
                    >
                      X
                    </button>
                  </div>
                </td>
                <td className="th-price">{item.price}</td>
              </tr>
            );
          })}
          <CartTotal cartTotal={this.props.cartTotal} />
        </table>
        {this.props.cart.length ? (
          <PlaceOrderButton
            user_id={this.props.user_id}
            user_name={this.props.user_name}
            cart={this.props.cart}
            itemsInCart_id={this.props.itemsInCart_id}
            emptyCart={this.props.emptyCart}
          />
        ) : null}
      </div>
    );
  }
}

export default CartContainer;
