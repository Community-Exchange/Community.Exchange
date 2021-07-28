import React from "react";
import Signup from "./components/Signup";
import Dashboard from "pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPass from "./components/ForgotPass";
import History from "pages/History";
import FormsContainer from "pages/FormsContainer";

function App() {
  return (
   
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/exchange" component={FormsContainer} />
              <Route path="/history" component={History} />
              <Route path="/forgot-password" component={ForgotPass} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
   
  );
}

export default App;