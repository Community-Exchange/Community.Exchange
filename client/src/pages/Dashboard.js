import React from "react";
// import ExchangeForm from "components/Forms/ExchangeForm";
import Nav from "components/Nav/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfileCard from "components/ProfileCard/ProfileCard";
import Exchanges from "components/Exchanges/Exchanges";
import "./dashboard.css";



export default function Dashboard() {
  return (
    <div>
      <Nav />
      {/* <ExchangeForm /> */}
      <div className="container ">
      <h3 className="title-style">Exchange Posts</h3>
      <Container className="dashboard-style">
        
        <Row className="dash-row">
          <Col md={4} className="dash-profile "> 
          <ProfileCard/>
          </Col>
          
          <Col md={8} className="dash-post">
            
          <Exchanges/>
          </Col>
          
        </Row>
      </Container>
      </div>
    </div>
  );
}
