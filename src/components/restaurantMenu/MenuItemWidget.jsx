import React, { Component } from "react";

export default class MenuItemWidget extends Component {
  render() {
    return (
      <div className="listings-row-element-menu">
        <div
          className="image"
          onClick={() => {
            this.props.updateCart(this.props.item);
          }}
        >
          <img src={this.props.item.imgURL} alt="itemPic" />
        </div>
        <div className="text">
          <div className="item-deets">
            <h3>{this.props.item.name}</h3>
            <h3>{this.props.item.price}</h3>
          </div>
        </div>
        <span className="item-desc">{this.props.item.description}</span>
      </div>
    );
  }
}
