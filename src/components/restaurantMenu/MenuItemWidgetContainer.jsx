import React, { Component } from "react";
import MenuItemWidget from "./MenuItemWidget";

export default class MenuItemWidgetContainer extends Component {
  render() {
    return (
      <div className="listings-row-menu">
        <div className="listings-col">
          {this.props.restaurant &&
            this.props.restaurant.menu.map((item) => {
              return (
                <MenuItemWidget
                  item={item}
                  updateCart={this.props.updateCart}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
