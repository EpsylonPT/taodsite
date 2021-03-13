import React from "react";
import {makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import HeaderPage from "views/HeaderPage.js";
import Typography from '@material-ui/core/Typography';
import data from "assets/json/eventos.json"
import Footer from "components/Footer/Footer.js";

import image1 from "assets/img/eventos/VIII Tunas D'Ouro/P1010334.JPG.jpg";

import  "assets/scss/plugins/plugin-galeria.scss"
import GaleriaCard from "./GaleriaCard.js"
import galeriaStyle from "assets/jss/material-kit-react/views/sobrenosPage.js";

const useStyles = makeStyles(galeriaStyle);

    

function getImages() {
    var fotos = data.eventos.map(function (i, index) {
        return (
          <GaleriaCard key={index} evento={i.nome} />
        )
      })

    return fotos;
}

export default function GaleriaPage() {
    const classes = useStyles();
    const fotos = getImages();
    return (
        <div>
            <HeaderPage change_height={50} />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image1 + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                <h2>Galeria</h2>
                <Typography variant="h5" align="center">
                    Clique nos titulos para ampliar as fotos
                </Typography> 
                    <GridContainer>
                       {fotos}
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}