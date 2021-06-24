import React from "react";
import ExchangeForm from "components/Forms/ExchangeForm";
// import { Container, Col, Row } from "react-bootstrap";
// import ProfileCard from "components/ProfileCard/ProfileCard";
// import ExchangesCard from "components/Exchanges/ExchangesCard";
import Nav from "components/Nav/Nav";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Nav />
      <ExchangeForm />
      
      {/* <div className="container ">
        <h3 className="title-style">Exchange Posts</h3>
        <Container className="dashboard-style">
          <Row className="dash-row">
            <Col md={4} className="dash-profile ">
              <ProfileCard />
            </Col>
            <Col md={8} className="dash-post">
              <ExchangesCard />
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
}
