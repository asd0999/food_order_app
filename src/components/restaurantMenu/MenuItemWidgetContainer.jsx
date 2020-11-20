import React, { Component } from "react";
import MenuItemWidget from "./MenuItemWidget";

export default class MenuItemWidgetContainer extends Component {
  render() {
    return (
      <div>
        <div className="listings-row">
          <div className="listings-col">
            <h1 style={{ width: "100%" }}>
              Welcome to{" "}
              {this.props.restaurant && this.props.restaurant.restaurantName}
            </h1>
            <div>
              {this.props.restaurant &&
                this.props.restaurant.menu.map((item) => {
                  return <MenuItemWidget item={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
