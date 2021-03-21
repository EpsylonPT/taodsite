import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderPage from "views/HeaderPage.js";
import Slider from "react-slick";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/socioPage.js";
import "assets/scss/plugins/plugin-galeria.scss";

import termos from "assets/pdf/Termos-Condições-Sócio.pdf"
import ficha_socio from "assets/word/Ficha-de-Sócio.docx";

import image from "assets/img/eventos/1.jpg"

import patrocinios from "assets/json/patrocinios"
import Patrocinios from "components/Patrocinios/Patrocinios";

const useStyles = makeStyles(styles);

const DownloadButton = withStyles({
  root: {
    background: "#000000",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    marginLeft: 10,
    marginBottom: 2,
    marginRight: 10,

  },
})(Button);


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
          <div style={{ top: 50 }}>
            <GridContainer alignItems="center" justify="center">
              <GridItem xs={12}>
                <br />
                <h1 className={classes.title}>Torna-te Socio desta tuna!</h1>
                <h4>
                  Antes de te tornares sócio da tuna lê os termos e condições!
                  </h4>
                <br />
                <DownloadButton color='github'href={termos} download="Termos-e-condições">Download Termos e condições</DownloadButton>
              </GridItem>
              <br />
              <GridItem xs={12}>
                <br></br>
                <h4>
                  Após leres os termos e condições, preenche esta ficha e envia para <a href="mailto:tao.douro@gmail.com" style={{color: "#FFFFFF"}}><b>tao.douro@gmail.com</b></a> ou imprime e entrega presencialmente a um dos membros da tuna em eventos da tuna
                  </h4>
                <br />
                <DownloadButton href={ficha_socio} download="Ficha-de-socio">Download Ficha de sócio</DownloadButton>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                 <Patrocinios></Patrocinios>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
