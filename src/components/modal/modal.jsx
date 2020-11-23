import React, { Component } from "react";
import Link from "react-router-dom";

export default class modal extends Component {
  render() {
    return (
      <div id="modal">
        <div id="modal-textbox">
          <p>Your order has been placed!</p>
          <div id="modal-footer">
            <a
              onClick={() => {
                this.props.closeModal();
              }}
              id="close"
              href="/"
            >
              close
            </a>
          </div>
        </div>
      </div>
    );
  }
}
