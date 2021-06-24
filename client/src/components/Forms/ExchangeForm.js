import React from "react";
import {Form, Button} from "react-bootstrap";
import "./forms.css";
// import API from "./"






export default function ExchangeForm() {
  return (
    <div className="container form-font">
      <h1 className="form-header">Make an Exchange </h1>
      <h4 className="form-header">Username: </h4>
      <Form>
        <Form.Group>
          <Form.Label>What do you need?</Form.Label>
          <Form.Group >
            <Form.Check inline
              type="checkbox"
              label="Goods"
              name="Goods"
              id="formHorizontalRadios1"
            />
            <Form.Check inline
              type="checkbox"
              label="Service"
              name="Service"
              id="formHorizontalRadios2"
            />
          </Form.Group>
          <Form.Control type="text" placeholder="Help with yard work..." />
        </Form.Group>

        {/* <Form.Group>
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
        </Form.Group> */}

        <fieldset>
          <Form.Label>
            What service or item will you exchange in return?
          </Form.Label>
          <Form.Group className="check-border ">
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
  );
}
