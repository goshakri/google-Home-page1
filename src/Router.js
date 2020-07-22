import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  );
}
