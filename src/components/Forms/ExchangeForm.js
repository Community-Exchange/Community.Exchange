import React from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import "./forms.css";

export default function ExchangeForm() {
    
  return (
    <div className="container">
      <h1 className="form-header">Exchange Information </h1>
      <h4 className="form-header">Username: </h4>
      <Form>
        <Form.Group>
          <Form.Label>What do you need?</Form.Label>
          <Form.Control type="text" placeholder="Help with yard work..." />
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
          <Form.Group>
            <Form.Label >
            What service or item will you exchange in return?
            </Form.Label>
            <Col sm={12}>
         
              <Form.Check
                type="radio"
                label="Auto Mechanics"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Childcare"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Cleaning"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
             
            </Col>
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
          <Button className="button" variant="outline-secondary">Post Exchange</Button>  
        </div>
        
      </Form>
    </div>
  );
}
