import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Contacts from "./Contacts";
import SignIn from "./SignIn";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/Contacts">
        <Contacts />
      </Route>
      <Route exact path="SignIn">
        <SignIn />
      </Route>
    </Switch>
  );
}
