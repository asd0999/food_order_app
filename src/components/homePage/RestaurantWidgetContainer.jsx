import React, { Component } from "react";
import RestaurantWidget from "./RestaurantWidget";

export default class RestaurantWidgetContainer extends Component {
  render() {
    console.log("restaurantWidgetProps", this.props);
    return (
      <div>
        <div className="listings-row">
          <div className="listings-col">
            {this.props.restaurants.map((item, index) => {
              return (
                <RestaurantWidget
                  key={index}
                  item={item}
                  updateStateRI={this.props.updateStateRI}
                  restaurant_id={this.props.restaurant_id}
                  user_id={this.props.user_id}
                  emptyCart = {this.props.emptyCart}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
