import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Profil from "./pages/profil";
import Home from "./pages/home";
import BottomNavigation from "./component/bottom-navigation";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profil} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
