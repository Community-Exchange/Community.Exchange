import React from "react";
import "./navbar.css";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand brand" href="#">
        Community Exchange
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              Dashboard <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              Exchange
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              History
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="city, item, service..."
            />
            <button class="btn button my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Community Exchange</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#features">Exchange Request</Nav.Link>
          <Nav.Link href="#pricing">History</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar> */}
    </div>
  );
}
