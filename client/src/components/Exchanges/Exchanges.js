import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import tempPhoto from "img/tempItem.png";

export default function Exchanges() {
  return (
    <div>
      <Card>
          <div className="container">
          <Row>
              <Col>
              <Image src={tempPhoto} thumbnail />
              </Col>
              <Col>
              <Card.Body>This is some text within a card body.</Card.Body>
              </Col>
          </Row>
          </div>
        
      </Card>
    </div>
  );
}
