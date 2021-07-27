import React, { useEffect, useState, useCallback } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProfileCard from "components/ProfileCard/ProfileCard";
import ExchangesCard from "components/Exchanges/ExchangesCard";
import Nav from "components/Nav/Nav";
import { useAuth } from "contexts/AuthContext";
import API from "utils/API";
import "./dashboard.css";

export default function Dashboard() {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [name, setName] = useState(null);
  const { currentUser } = useAuth();

  const userData = currentUser.uid;

  console.log(userData);

  const loadDash = async () => {
    try {
      let dbData = await API.getUser(userData).then((res) => {
        console.log(res);
        setDataLoaded(res.data.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadDash();
  }, [])

  return (
    <div>
      <Nav />
      <div className="container-dash">
        <h3 className="title-style">Exchanges</h3>
        <Container className="dashboard-style">
          <Row className="dash-row">
            <Col md={4} className="dash-profile ">
              
              <ProfileCard user={setName}/>
            </Col>
            <Col md={8} className="dash-post">
              <ExchangesCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
