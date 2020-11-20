import React, { Component } from "react";
import MenuItemWidget from "./MenuItemWidget";

export default class MenuItemWidgetContainer extends Component {
  render() {
    console.log(this.props.current_restaurant);
    return (
      <div>
        <div className="listings-row">
          <div className="listings-col">
            {this.props.current_restaurant.menu.map((item) => {
              return <div>{item.name}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
