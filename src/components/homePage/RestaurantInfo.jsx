import React, { Component } from "react";

export default class RestaurantInfo extends Component {
  render() {
    return (
      <div className="restaurant-details-container">
        <h1>{this.props.restaurant_name && this.props.restaurant_name}</h1>
        <div className="restaurant-details">
          <span>
            {"Address: "}
            {this.props.restaurant_apt} {this.props.restaurant_street}
            {", "}
            {this.props.restaurant_zip}
          </span>
          <div>
            {"Phone: "}
            {this.props.restaurant_phone}
          </div>
        </div>
      </div>
    );
  }
}
