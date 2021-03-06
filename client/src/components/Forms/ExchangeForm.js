import React, { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import API from "utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./forms.css";

export default function ExchangeForm(props) {
  const {currentUser} = useAuth();
  const [user, setUser] = useState();
  const [need, setNeed] = useState();
  const [exchange, setExchange] = useState([]);
  const [description, setDescription] = useState();
  const [error, setError] = useState();

useEffect( async () => {

  let resultFormUser = await API.getUser(currentUser.email);
  if(error) {
    console.log(error);
  };
  setUser(resultFormUser.data.name);
  
}, [])
  // const handleSubmit = () => {
  //   e.preventDefault();
    

  // }

  return (
    <div className="container form-font">
      <h1 className="form-header">Make an Exchange </h1>
      <h4 className="form-header">{user} </h4>
      <Form>
        <Form.Group name="need">
          <Form.Label>What do you need?</Form.Label>
          <Form.Control type="text" placeholder="Help with yard work..." />
        </Form.Group>
        <fieldset>
          <Form.Label>
            Will you be exchanging in return?
          </Form.Label>
          <Form.Group >
            <Form.Check inline
              type="checkbox"
              label="Item"
              name="Item"
              id="formHorizontalRadios1"
            />
            <Form.Check inline
              type="checkbox"
              label="services"
              name="services"
              id="formHorizontalRadios2"
            />
          </Form.Group>
        </fieldset>
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
          <Button  className="button" variant="outline-secondary">
            Post Exchange
          </Button>
        </div>
      </Form>
    </div>
  );
}
