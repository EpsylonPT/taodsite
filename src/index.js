import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "views/LandingPage/LandingPage.js";
import CancioneiroPage from "views/Cancioneiro/CancioneiroPage.js";
import LojaPage from "views/Loja/LojaPage.js";
import ContactoPage from "views/Contacto/ContactoPage.js";
import SocioPage from "views/Socio/SocioPage.js";
import AcercaPage from "views/SobreNosPage/SobreNosPage.js";
import Premios from "views/SobreNosPage/Premios/Premios.js"
import Membros from "views/SobreNosPage/Membros/Membros.js"
import GaleriaPage from "views/Galeria/GaleriaPage.js";

var hist = createBrowserHistory();

var mainLink = "/taodsite"

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/acercataod" component={AcercaPage} />
      <Route path="/premios" component={Premios} />
      <Route path="/membros" component={Membros} />
      <Route path="/galeria" component={GaleriaPage} />
      <Route path="/cancioneiro" component={CancioneiroPage} />
      <Route path="/loja" component={LojaPage} />
      <Route path="/contacto" component={ContactoPage} />
      <Route path="/socio" component={SocioPage} />
      <Route path={mainLink} component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
