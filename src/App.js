import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Profil from "./pages/profil";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Profil} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
