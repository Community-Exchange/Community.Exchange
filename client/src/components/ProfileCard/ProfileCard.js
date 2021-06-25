import React from "react";
import { Card, Button } from "react-bootstrap";
// import ListGroupItem from 'react-bootstrap/ListGroup';
// import ListGroup from 'react-bootstrap/ListGroup';
import profile from "img/tempProfile.jpeg";
import "./profile.css";

export default function ProfileCard() {
  return (
    <div>
      <Card className="card-style">
        <Card.Img className="profile-img" variant="top" src={profile} />
        <Card.Body >
          <Card.Title className="user">Username</Card.Title>
          <Button className="user-body2" href="#">Edit</Button>
          <Button className="user-body" href="#">Logout</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
