import React from "react";
import { Card, Button } from "react-bootstrap";
// import ListGroupItem from 'react-bootstrap/ListGroup';
// import ListGroup from 'react-bootstrap/ListGroup';
import profile from "img/tempProfile.jpeg";
import {useAuth} from "contexts/AuthContext";
import "./profile.css";



export default function ProfileCard(props) {
  const { logout } = useAuth();

const byebye = () => {
  logout()
}


  return (
    <div>
      <Card className="card-style">
        <Card.Img className="profile-img" variant="top" src={profile} />
        <Card.Body >
          <Card.Title className="user">{props.user}</Card.Title>
          <Button className="user-body2" href="#">Edit</Button>
          <Button onClick={byebye} className="user-body" href="/login">Logout</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
