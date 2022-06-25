import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoxEmail from "./OutSideComponent/BoxEmail";
import Login from "./OutSideComponent/Login";
import SignUpRagistration from "./OutSideComponent/SignUpRagistration";
import Password from "./OutSideComponent/Password";
import Signup from "./OutSideComponent/Signup";
import PlanForm from "./OutSideComponent/PlanForm";
import SetupPayment from "./OutSideComponent/SetupPayment";
import CraditOption from "./OutSideComponent/CraditOption";
import Navbar from "./EnterComponent/Navbar";
import Account from "./EnterComponent/Account";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={BoxEmail} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/passinfo" component={SignUpRagistration} exact />
          <Route path="/password" component={Password} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/planform" component={PlanForm} exact />
          <Route path="/signup/payment" component={SetupPayment} exact />
          <Route path="/signup/creditoption" component={CraditOption} exact />
          <Route path="/browse" component={Navbar} exact />
          <Route path="/YourAccount" component={Account} exact />
        </Router>
      </div>
    )
  }
}