import React, { Component } from "react";

export default class PastOrders extends Component {
  render() {
    return (
      <div>
        <h2>Past Orders</h2>
        <table>
          <tr>
            <th>Item name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {this.props.pastOrders.map((order) => {
            // console.log("my order", order.itemsInOrder);
            return (
              <>
                <h3>
                  Order Date: {order.createdAt.slice(0, 10)}
                  {" Time: "}
                  {order.createdAt.slice(12, 16)}
                  {" delivery: "}
                  {order.delivery ? "delivery" : "pick-up"}
                </h3>
                {order.itemsInOrder.map((item) => {
                  //   console.log("indvidiual item", item.item_name);
                  return (
                    <tr>
                      <td>{item.item_name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </table>
      </div>
    );
  }
}