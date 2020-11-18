import React, { Component } from "react";
import { NavLink } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="header-container">
            <div class="brand-logo">
              <h1>
                Zuber<span>Eats</span>
              </h1>
            </div>
            <div class="currentDetails">
              <div class="header-item">
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
              </div>
              <div class="header-item">
                <span>
                  <NavLink href="/sign-in">Sign in</NavLink>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
