import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProfileCard from "components/ProfileCard/ProfileCard";
import ExchangesCard from "components/Exchanges/ExchangesCard";
import Nav from "components/Nav/Nav";
import { useAuth } from "contexts/AuthContext";
import API from "utils/API";
import "./dashboard.css";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [user, setUser] = useState(); 
  const [error, setError] = useState(null);

const loadExchanges = async () => {
  const resultExchanges = await API.getExchanges(currentUser.email);
  if(error) {
    console.log("Error loading exchanges", + error);
    setError(error);
    return <h3>Error Loading Exchanges</h3>
  };
  
  setData(resultExchanges.data);
  console.log("These are the exchanges", resultExchanges.data)
};

const loadDash = async () => {
  const resultUser = await API.getUser(currentUser.email);
  if(error) {
    console.log("Error loading User", + error);
    setError(error);
    return <h3>Error loading User</h3>
  };
  setUser(resultUser.data.name);
  console.log("This is the user", resultUser.data.name);
};

useEffect(() => {
  loadDash();
  loadExchanges();
}, []);


// useEffect( async () => {
//   let loadDash = await API.getUser(currentUser.email);
//   setUser(loadDash.data.name);
//   console.log(loadDash.data.name);
  
// }, [])



    return (
      <div>
        <Nav />
        <div className="container-dash">
          <h3 className="title-style">Exchanges</h3>
          <Container className="dashboard-style">
            <Row className="dash-row">
              <Col md={4} className="dash-profile ">
                <ProfileCard  user={user}/>
              </Col>
              <Col md={8} className="dash-post">
                <ExchangesCard />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };

  
