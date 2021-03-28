import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SpeakerPage from "./pages/speakers";
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/speakers" component={SpeakerPage} exact />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
