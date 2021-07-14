import React from "react";
import Nav from "./components/navbar/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import "./styles/App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/12" exact component={Dashboard} />
        <Route path="/18" exact component={Dashboard} />
        <Route path="/" exact>
          <Redirect to="/12" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
