import React from "react";
import Nav from "./components/navbar/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
