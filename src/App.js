import React from "react";
import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./pages";
import SpeakerPage from "./pages/speakers";
import TeamPage from "./pages/team";
import GlimpsePage from "./pages/glimpse";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/speakers" component={SpeakerPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/glimpse" component={GlimpsePage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
