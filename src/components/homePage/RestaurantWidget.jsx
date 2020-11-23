import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RestaurantWidget extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const ri = this.props.item._id;
    const rn = this.props.item.restaurantName;
    const rStreet = this.props.item.streetname;
    const rZip = this.props.item.zipcode;
    const rPhone = this.props.item.phoneNumber;
    const rImg = this.props.item.imgUrl;
    const rApt = this.props.item.apartmentNumber;
    this.props.updateStateRI(ri, rn, rStreet, rZip, rPhone, rImg, rApt);
  }

  componentDidMount() {
    this.props.emptyCart();
  }

  render() {
    return (
      <div className="listings-row-element">
        <Link
          to={`/r/${this.props.item.restaurantName}`}
          onClick={this.handleClick}
        >
          <div className="image">
            <img src={this.props.item.imgUrl} alt="restaurantPic" />
          </div>
        </Link>
        <div className="text">
          <div>
            <h3>{this.props.item.restaurantName}</h3>
            <div className="info">
              <span>$4.99 delivery fee | 20-30 MINS </span>
            </div>
          </div>
          <div className="rating">
            <span className="circle">{this.props.item.rating}</span>
          </div>
        </div>

        <div className="text-lower">
          <span className="smallText">
            {this.props.item.tags.map((tag) => {
              return this.props.item.tags.indexOf(tag) ===
                this.props.item.tags.length - 1
                ? tag
                : tag + " | ";
            })}
          </span>
        </div>
      </div>
    );
  }
}
