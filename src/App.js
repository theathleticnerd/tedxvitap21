import React from "react";
import "./App.css";
import { Switch , Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./pages";
import SpeakerPage from "./pages/speakers";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speakers" component={SpeakerPage} />
        <Redirect to= "/" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
