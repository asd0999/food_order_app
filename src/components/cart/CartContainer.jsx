import React, { Component } from "react";
import CartTotal from "./CartTotal";
import PlaceOrderButton from "./PlaceOrderButton";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log(typeof e.target.value);
    let val = true;
    if (e.target.value === "false") {
      val = false;
    } else {
      val = true;
    }
    // console.log(typeof val);
    this.props.updateDelivery(val);
  }

  render() {
    return (
      <div className="cart-container">
        <table>
          <tr>
            <th className="total" id="item-header">
              <h4>Item</h4>
              <div className="header-options-span">
                <select onChange={this.handleChange} className="header-options">
                  <option value="true">Delivery</option>
                  <option value="false">Pickup</option>
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
            delivery={this.props.delivery}
            showModal={this.props.showModal}
            closeModal={this.props.closeModal}
          />
        ) : null}
      </div>
    );
  }
}

export default CartContainer;
