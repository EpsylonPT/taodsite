import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderPage from "views/HeaderPage.js";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import "assets/scss/plugins/plugin-galeria.scss";

import image from "assets/img/eventos/1.jpg"

import Patrocinios from "components/Patrocinios/Patrocinios";

const useStyles = makeStyles(styles);

function anosDaTuna(){
  var today = new Date();
  return parseInt(today.getFullYear()) - 2001 
}

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <HeaderPage change_height={50} />
        <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
          <div className={classes.container} >
            <div style={{top: 25}}>
              <GridContainer  alignItems="center"  justify="center">
                <GridItem style={{marginTop: "10%"}} xs={12}>
                  <h2 className={classes.title}>A Tuna Académica de Oliveira do Douro dá as boas-vindas ao seu site oficial!</h2>
                  <h4 style={{marginTop: "2%"}}>
                  A Tuna Académica de Oliveira do Douro dá as boas-vindas ao seu site oficial!<br/>
Já contamos com {anosDaTuna()} anos de muita música, companheirismo, amizade, brindes e muitos palcos pisados...
<br/>Vem conhecer esta tuna tão particular e fica a par de todas as novidades...
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
              <div style={{marginTop: "20vh"}}></div>
              <Patrocinios/>
            </div>
          </div>
          <Footer whiteFont />
         </div>     
    </div>
  );
}
