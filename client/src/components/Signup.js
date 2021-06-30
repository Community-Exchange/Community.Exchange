import React, { useState, useRef } from "react";
import { useAuth } from "contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import API from "utils/API";
import "../components/Forms/forms.css";

export default function Signup() {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const { createAccount } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmRef.current.value){
      setError("");
      setLoading(true);
    } else{
     return setError("Passwords do not match.");
    };
    try{
      const user = await createAccount(emailRef.current.value, passwordRef.current.value);
        API.saveNewUser({
          userId: user.user.uid,
          name: name,
          email: emailRef.current.value,
          city: city 
        }).then((results) => {
          console.log(results);
        });
        history.push("/");
    } catch {
      setError("Account not created, please try again.")
    }
    setLoading(false);
  }


  return (
    <>
      <div className="container form-font">
        <h1 className="form-header">Signup</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group name="name">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e)=> e.target.value !== null ? setName(e.target.value) : setName("")} type="text" placeholder="Jane Doe" />
          </Form.Group>
          <Form.Group name="city">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={(e) => e.target.value !== null ? setCity(e.target.value) : setCity("")} type="text" placeholder="Your City" />
          </Form.Group>
          <Form.Group name="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={emailRef}
              type="text"
              placeholder="janedoe@gmail.com"
            />
          </Form.Group>
          <Form.Group name="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="at least 6 characters"
            />
          </Form.Group>
          <Form.Group name="password-confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              ref={passwordConfirmRef}
              type="password"
              placeholder="at least 6 characters"
            />
          </Form.Group>
          <div className="div-button">
            <Button
              disabled={loading}
              type="submit"
              className="button"
              variant="outline-secondary"
            >
              Signup
            </Button>
          </div>
          <div className="w-100 text-center mt">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Form>
      </div>
    </>
  );
}
