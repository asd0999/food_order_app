import React, { Component } from "react";

export default class RestaurantInfo extends Component {
  render() {
    return (
      <div className="restaurant-details-container">
        <h1>{this.props.restaurant_name && this.props.restaurant_name}</h1>
        <div className="restaurant-details">
          <div>
            <span className="deets">{"Address:"}</span>{" "}
            {this.props.restaurant_apt} {this.props.restaurant_street}
            {", "}
            {this.props.restaurant_zip}
          </div>
          <div>
            <span className="deets">{"Phone:"}</span>{" "}
            {this.props.restaurant_phone}
          </div>
        </div>
      </div>
    );
  }
}
