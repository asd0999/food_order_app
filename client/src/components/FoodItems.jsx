import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import FItem from "./FItem";

export default class FoodItems extends Component {
  render() {
    return (
      <div>
        <Container fluid="md">
          <Row>
            <Col>
              <FItem />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
