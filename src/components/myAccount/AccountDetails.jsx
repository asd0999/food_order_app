import React, { Component } from "react";

export default class AccountDetails extends Component {
  render() {
    return (
      <div className="account-details">
        <h2>Account Details</h2>
        <table>
          <tr>
            <td>Username </td>
            <td>{this.props.userDetails.username} </td>
          </tr>
          <tr>
            <td>Phone Number </td>
            <td>{this.props.userDetails.phoneNumber} </td>
          </tr>
          <tr>
            <td>Email </td>
            <td>{this.props.userDetails.email} </td>
          </tr>
        </table>
      </div>
    );
  }
}

// comment
