import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class modal extends Component {
  render() {
    return (
      <div id="modal">
        <div id="modal-textbox">
          <p>Your order has been placed!</p>
          <Link
            to={"/home"}
            className="modal-button"
            onClick={() => {
              this.props.closeModal();
            }}
          >
            OK
          </Link>
        </div>
      </div>
    );
  }
}
