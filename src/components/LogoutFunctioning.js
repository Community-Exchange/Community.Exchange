import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function LogoutFunctioning() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  //   log out functioning below for other pages
  return (
    <>
      Hello World :) &hearts;
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Main Feed Page After Logged In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {currentUser.email}
          {/* This link to can be changed and/or saved for later if we add profile's and updating personal information or posts */}
          <Link to="/update" className="btn btn-primary w-100">
            Update
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
