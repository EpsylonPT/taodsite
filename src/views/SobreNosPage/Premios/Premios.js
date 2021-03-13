import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";

import image from "assets/img/eventos/Atuação Centro Cultural S. Felix da Marinha - abr 2018/44070682_1832037166926133_4255104579244392448_n.jpg";

import PremiosCard from "./PremioCard.js"
import data from "assets/json/premios.json"
import sobrenosStyles from "assets/jss/material-kit-react/views/sobrenosPage.js";

const useStyles = makeStyles(sobrenosStyles);


function getPremios() {
    var premios = data.premios.map(function (i, index) {
      return (
        <PremiosCard key={index} premio={i} />
      )
    })
    return premios;
  }

export default function AcercaPage() {
    const classes = useStyles();
    const premios = getPremios()
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
                <div className={classes.container}>
                    <GridContainer justify="center">
                        {premios}
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}