import React from "react";
import { Card, Button } from "react-bootstrap";
import "./exchangeCard.css";



export default function PostProfileCard(props) {


  return (
    <div  className="mt-2 "  >
      <Card id="post-profileCard">
        <Card.Body id="post-profile" >
          <Card.Title id="username"
          >UserName{props.user}</Card.Title>
          <Button className="profilePostButton"  href="#">Exchange</Button> 
          <Button  className="profilePostButton" href="#">Questions?</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
