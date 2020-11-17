import React, { Component } from "react";

export default class Listing extends Component {
  render() {
    return (
      <div>
        <div class="listings-row">
          <div class="listings-col">
            <div class="listings-row-element">
              <div class="image">
                <img
                  src="https://images.unsplash.com/photo-1562967914-01efa7e87832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80"
                  alt="Listing pic"
                />
              </div>
              <div class="text">
                <div>
                  <h3>Eataly Boston</h3>
                  <div class="info">
                    <span>$4.99 delivery fee | 20-30 MINS </span>
                  </div>
                </div>
                <div class="rating">
                  <span class="circle">4.2</span>
                </div>
              </div>
              <div class="text-lower">
                <span class="smallText">
                  Italian • Pasta • Pizza • Family Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
