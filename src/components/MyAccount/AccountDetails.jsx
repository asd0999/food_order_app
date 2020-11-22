import React, { Component } from 'react'

export default class AccountDetails extends Component {
    render() {
        return (
            <div>
                <h2>Account Details</h2>
                <h3>Username: {this.props.userDetails.username} </h3>
                <h3>Phone Number: {this.props.userDetails.phoneNumber} </h3>
                <h3>Email: {this.props.userDetails.email} </h3>
                
            </div>
        )
    }
}
