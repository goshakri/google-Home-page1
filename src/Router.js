import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Contacts from "./pages/Contacts";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/contacts">
        <Contacts />
      </Route>
    </Switch>
  );
}
