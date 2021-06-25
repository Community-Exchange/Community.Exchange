import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Forms/forms.css"

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [name, setName] = useState();
  const [exchangeCurrency, setExchangeCurrency] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
    <div className="container form-font">
      <h1 className="form-header">Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group id="name">
          <Form.Label  >Name</Form.Label>
          <Form.Control type="text" placeholder="Jane Doe" />
        </Form.Group>
        <Form.Group id="city">
          <Form.Label >City</Form.Label>
          <Form.Control ref={emailRef} type="text" placeholder="Your City" />
        </Form.Group>
        <Form.Group id="email">
          <Form.Label >Email</Form.Label>
          <Form.Control ref={emailRef} type="text" placeholder="janedoe@gmail.com" />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label >Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="at least 6 characters" />
        </Form.Group>
        <Form.Group id="password-confirm" > 
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={passwordConfirmRef} type="password" placeholder="at least 6 characters" />
        </Form.Group>
        <div className="div-button">
          <Button disabled={loading} type="submit" className="button" variant="outline-secondary">
            Signup
          </Button>
        </div>
        <div className="w-100 text-center mt">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </Form> 
    </div>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
    </>
  );
}
