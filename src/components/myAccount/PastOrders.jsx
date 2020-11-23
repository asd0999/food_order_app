import React, { Component } from "react";

export default class PastOrders extends Component {
  render() {
    return (
      <div className="past-orders-container">
        <h2>Past Orders</h2>
        {this.props.pastOrders.map((order) => {
          return (
            <div className="one-order">
              <h3 className="restaurant-name">{order.restaurant_name}</h3>
              <div className="past-order-date-bar">
                Date: {order.createdAt.slice(0, 10)}{" "}
                {order.createdAt.slice(12, 16)}{" "}
                <button className="deets" id="past-order-delivery">
                  {order.delivery ? "delivery" : "pick-up"}
                </button>
              </div>
              <table>
                <tr>
                  <th id="item-header">Item</th>
                  <th className="th-price">Price</th>
                </tr>
                {order.itemsInOrder.map((item) => {
                  return (
                    <tr>
                      <td>{item.item_name}</td>
                      <td className="td-price">{item.price}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
