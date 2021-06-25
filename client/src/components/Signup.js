import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
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
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Jane Doe" />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Your City" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="janedoe@gmail.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="at least 6 characters" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What service or item will you exchange in return?
          </Form.Label>
          <Form.Control as="select" multiple>
            <option>Auto Mechanics</option>
            <option>Childcare</option>
            <option>Cleaning</option>
            <option>Cooking</option>
            <option>Education/Tutoring</option>
            <option>Landscaping</option>
            <option>Pet Care</option>
            <option>Plumbing</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <fieldset>
          <Form.Label>
            What service or item will you exchange in return?
          </Form.Label>
          <Form.Group className="check-border">
            {/* <Col sm={12}> */}

            <Form.Check
              type="checkbox"
              label="Auto Mechanics"
              name="Auto Mechanics"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="Childcare"
              name="Childcare"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Cleaning"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />

            <Form.Check
              type="checkbox"
              label="Cooking"
              name="Cooking"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Education/Tutoring"
              name="Education/Tutoring"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Landscaping"
              name="Landscaping"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Pet Care"
              name="Pet Care"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Plumbing"
              name="Plumbing"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Other"
              name="Other"
              id="formHorizontalRadios3"
            />
            {/* </Col> */}
          </Form.Group>
        </fieldset>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional Information:</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Include an image of your Exchange item."
          />
        </Form.Group>
        <div className="div-button">
          <Button className="button" variant="outline-secondary">
            Post Exchange
          </Button>
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
