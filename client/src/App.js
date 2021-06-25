import React from "react";
import Signup from "./components/Signup";
import Dashboard from "pages/Dashboard";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPass from "./components/ForgotPass";
import LogoutFunctioning from "./components/LogoutFunctioning";
import History from "pages/History";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400 px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={LogoutFunctioning} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/history" component={History} />
              <Route path="/forgot-password" component={ForgotPass} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;