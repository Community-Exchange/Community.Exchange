import React from "react";
import { Card, Row, Col, Image, ListGroup, ListGroupItem } from "react-bootstrap";
import PostProfileCard from "components/Exchanges/PostProfileCard";
import tempPhoto from "img/tempItem.png";
import "./exchangeCard.css";

export default function ExchangesCard() {
  return (
    <div className="mt-3">
      <Card className="card-styles">
        <div className="container">
          <Row>
          <Col md={6}>
            <PostProfileCard/>
            </Col>
          </Row>
          <Row>
            
            <Col md={4}>
              <Image className="mt-3 mb-2" src={tempPhoto} thumbnail />
            </Col>
            <Col md={8}>
              <ListGroup className="exchange-info"  variant="flush">
                <ListGroup.Item className="exchange-info"  ><b>{`Item:  `}</b>Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="exchange-info"  ><b>{`Contact:  `}</b>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="exchange-info"  ><b>{`Info:  `}</b>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
