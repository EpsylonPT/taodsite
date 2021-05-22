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
                  <h1 className={classes.title}>Website oficial da Tuna</h1>
                  <h4>
                  Bem vindo ao site oficial da melhor tuna de Oliveira do Douro. 
                  Aqui poderás encontrar informações irrelevantes para a tua vida mas ficas a conhecer a tuna e de como te tornares parte dela!
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
              <Patrocinios/>
            </div>
          </div>
          <Footer whiteFont />
         </div>     
    </div>
  );
}
