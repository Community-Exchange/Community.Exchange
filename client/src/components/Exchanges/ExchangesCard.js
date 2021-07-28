import React from "react";
import {
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import PostProfileCard from "components/Exchanges/PostProfileCard";
import tempPhoto from "img/tempItem.png";
import "./exchangeCard.css";

export default function ExchangesCard(props) {
  return (
    <div className="mt-3">
      <Card className="card-styles">
        
          <Row id="col-profile">
            <Col  md={12}>
              <PostProfileCard />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Image className="mt-3 mb-2" src={tempPhoto} thumbnail />
            </Col>
            <Col md={8}>
              <ListGroup className="exchange-info" variant="flush">
                <ListGroup.Item className="exchange-info">
                  <b>{`City:  `}</b>{props.city}
                </ListGroup.Item>
                <ListGroup.Item className="exchange-info">
                  <b>{`Contact:  `}</b>{props.email}
                </ListGroup.Item>
                <ListGroup.Item className="exchange-info">
                  <b>{`Item:  `}</b>{props.item}
                </ListGroup.Item>
                
                <ListGroup.Item className="exchange-info">
                  <b>{`Info:  `}</b>{props.details}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        
      </Card>
    </div>
  );
}
