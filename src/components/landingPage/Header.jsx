import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="header-container">
            <div class="brand-logo">
              <Link to="/">
                <h1>
                  Food<span>Hubbs</span>
                </h1>
              </Link>
            </div>
            <div class="currentDetails">
               {/* <div class="header-item">
                <span className="header-options-span">
                  <select className="header-options" name="" id="">
                    <option value="">Delivery</option>
                    <option value="">Pickup</option>
                  </select>
                </span>
                <div class="header-item">
                  <span> Location? </span>
                </div>
              </div> 
            </div>
            <div class="search-bar">
              <div class="header-item">
                <span>
                  <input
                    className="header-search"
                    type="text"
                    placeholder="Search.."
                    name="search"
                  />
                </span>
              </div> */}
              <div class="header-item">
                <span>
                  {this.props.user_name ? (
                    "Welcome " + this.props.user_name
                  ) : (
                    null
                  )}
                </span>
                <span>
                  {this.props.user_name ? (
                    <NavLink href="/">Sign Out</NavLink>
                  ) : (
                    <Link to="/sign-in">Sign in</Link>
                  )}
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
