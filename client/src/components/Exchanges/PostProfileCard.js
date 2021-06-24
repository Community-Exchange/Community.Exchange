import React from "react";
import { Card, Button } from "react-bootstrap";
import "./exchangeCard.css";

export default function PostProfileCard() {
  return (
    <div className="mt-2"  >
      <Card >
        <Card.Body id="post-profile" >
          <Card.Title id="username"
          >{`Username`}</Card.Title>
          <Button className="profilePostButton"  href="#">Exchange</Button> 
          <Button  className="profilePostButton" href="#">Questions?</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
