import React, { Component } from "react";

export default class RestaurantInfo extends Component {
  render() {
    return (
      <div className="landing-greeting-container">
        <div className="landing-greeting-item">
          <div className="restaurant-card">
            <h1>
              Welcome to{" "}
              {this.props.restaurant_name && this.props.restaurant_name}
            </h1>
            <h1>
              <span>
                Our Location: {this.props.restaurant_apt}{" "}
                {this.props.restaurant_street}
              </span>
              {","}
              <span>{this.props.restaurant_zip}</span>
              <br />
              <span>Phone Number: {this.props.restaurant_phone}</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
