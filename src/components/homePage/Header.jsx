import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getPastOrders();
    this.props.getUserDetails();
  }

  render() {
    return (
      <div>
        <header>
          <div class="header-container">
            <div class="brand-logo">
              {this.props.user_name ? (
                <Link to="/home">
                  <h1>
                    Food<span>Central</span>
                  </h1>
                </Link>
              ) : (
                <Link to="/">
                  <h1>
                    Food<span>Central</span>
                  </h1>
                </Link>
              )}
            </div>
            <div className="header-item-container">
              <div className="header-item greeting">
                {this.props.user_name
                  ? "Welcome " + this.props.user_name
                  : null}
              </div>
              <div className="header-item">
                {this.props.user_name ? (
                  <Link
                    onClick={this.handleClick}
                    to={"/u/" + this.props.user_id}
                  >
                    <button id="my-account-button">My Account</button>
                  </Link>
                ) : null}
              </div>
              <div className="header-item">
                {this.props.user_name ? (
                  <NavLink href="/">
                    <button id="sign-out-button">Sign Out</button>
                  </NavLink>
                ) : (
                  <Link to="/sign-in">
                    <button id="sign-in-button">Sign in</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
