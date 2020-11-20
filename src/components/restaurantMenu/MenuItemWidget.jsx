import React, { Component } from "react";

export default class MenuItemWidget extends Component {
  render() {
    return (
      <div className="listings-row-element">
        <div className="image" onClick= {() => {
          this.props.updateCart(this.props.item)}}>
          <img src={this.props.item.imgURL} alt="itemPic" />
        </div>
        <div className="text">
          <div>
            <h3>{this.props.item.name}</h3>
            <div className="info">
              <span>{this.props.item.price}</span>
            </div>
          </div>
          <div className="rating">
            <span className="circle">{this.props.item.description}</span>
          </div>
        </div>
      </div>
    );
  }
}
