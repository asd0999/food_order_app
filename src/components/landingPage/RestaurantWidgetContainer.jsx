import React, { Component } from "react";
import RestaurantWidget from "./RestaurantWidget";

export default class RestaurantWidgetContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("restaurantWidgetProps", this.props);
    return (
      <div>
        <div className="listings-row">
          <div className="listings-col">
            {this.props.restaurants.map((item) => {
              return (
                <RestaurantWidget item={item} 
                updateState={this.props.updateState} restaurant_id={this.props.restaurant_id} user_id={this.props.user_id} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
