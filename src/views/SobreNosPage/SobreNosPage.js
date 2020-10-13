import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// core components

import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import Premios from "views/SobreNosPage/Premios.js"
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import image from "assets/img/bg7.jpg";
import Button from "components/CustomButtons/Button.js";

import sobrenos from "sobrenos.json"

const useStyles = makeStyles(styles);


function getTextoInicial() {
    return sobrenos.textoInicial;
}

function getTexto() {
    var texto = sobrenos.texto.map(function (i, index) {
        return (
            <p>
                {i}
            </p>
        )
    })
    return texto;
} 

export default function AcercaPage(props) {

    const classes = useStyles();
    const { ...rest } = props;
    const textoinit = getTextoInicial();
    const texto = getTexto();
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
                    <h2>Sobre nós</h2>
                    <GridContainer justify="center">
                        {textoinit}
                    </GridContainer>
                    <h3 />
                    <p>
                        {texto}
                    </p>
                    <Premios/>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}