import React, { Component } from "react";
import Link from "react-router-dom";

export default class modal extends Component {
  render() {
    return (
      <div id="modal">
        <div id="modal-textbox">
          <p>Your order has been placed!</p>
          <div id="modal-footer">
            <a id="close" href="#"></a>
          </div>
        </div>
      </div>
    );
  }
}
