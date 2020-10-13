import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "views/LandingPage/LandingPage.js";
import CancioneiroPage from "views/CancioneiroPage/CancioneiroPage.js";
import AcercaPage from "views/SobreNosPage/SobreNosPage.js";
import Premios from "views/SobreNosPage/Premios.js"

var hist = createBrowserHistory();

var mainLink = "/taodsite"

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/acercataod" component={AcercaPage} />
      <Route path="/cancioneiro" component={CancioneiroPage} />
      <Route path="/premios" component={Premios} />
      <Route path={mainLink} component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
