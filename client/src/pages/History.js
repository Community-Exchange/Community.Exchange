import React from "react";
// import ExchangeForm from "components/Forms/ExchangeForm";
import { Container, Col, Row } from "react-bootstrap";
import ProfileCard from "components/ProfileCard/ProfileCard";
import Claimed from "components/Exchanges/Claimed.js"
import Nav from "components/Nav/Nav";
import "./dashboard.css";

export default function History() {

  
  return (
    <div>
      <Nav />
      {/* <ExchangeForm /> */}
      
      <div className="container ">
        <h3 className="title-style">Claimed Exchanges</h3>
        <Container className="dashboard-style">
          <Row className="dash-row">
            <Col md={4} className="dash-profile ">
              <ProfileCard />
            </Col>
            <Col md={8} className="dash-post">
              <Claimed />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
