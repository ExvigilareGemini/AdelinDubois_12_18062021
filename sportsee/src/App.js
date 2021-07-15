import React from "react";
import Nav from "./components/navbar/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import "./styles/App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

/** Nav and dashboard rendering. Routing to switch the id in the url (actually 12 and 18), page init with id=12.
 *
 * @returns React components
 */
function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/:id" exact component={Dashboard} />
        <Route path="/" exact>
          <Redirect to="/12" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
