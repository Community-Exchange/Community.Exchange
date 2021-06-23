import React from "react";
import Card from 'react-bootstrap/Card';
// import ListGroupItem from 'react-bootstrap/ListGroup';
// import ListGroup from 'react-bootstrap/ListGroup';
import profile from "img/tempProfile.jpeg";
import "./profile.css";

export default function ProfileCard() {
  return (
    <div >
      <Card className="card-style">
        <Card.Img className="profile-img" variant="top" src={profile} />
        <Card.Body className="user">
          <Card.Title >Username</Card.Title>
          <Card.Link  href="#">Edit</Card.Link>
          <Card.Link href="#">Logout</Card.Link>
        </Card.Body>
       
      </Card>
    </div>
  );
}
