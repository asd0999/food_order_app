import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class SignIn1 extends Component {
  render() {
    return (
      <div className="sign-in-items">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Customer Name</Card.Title>

            <Card.Text>customer info</Card.Text>
            <Card.Link href="/users/myorder?">My Order</Card.Link>
            <Card.Link href="/">Home Page</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Customer Name</Card.Title>

            <Card.Text>customer info</Card.Text>
            <Card.Link href="/users/myorder?">My Order</Card.Link>
            <Card.Link href="/">Home Page</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Customer Name</Card.Title>

            <Card.Text>customer info</Card.Text>
            <Card.Link href="/users/myorder?">My Order</Card.Link>
            <Card.Link href="/">Home Page</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
