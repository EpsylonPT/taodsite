import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// core components
import { Link } from "react-router-dom";
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';
import sobrenosStyles from "assets/jss/material-kit-react/views/sobrenosPage.js";

import image from "assets/img/eventos/II Real Academicvs - Vila Real - Mar 2014/10965447_880106072010816_756592512_n.jpg";
import Button from "components/CustomButtons/Button.js";

import sobrenos from "assets/json/sobrenos.json"

const useStyles = makeStyles(sobrenosStyles);


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
                    <GridContainer alignItems="center" justify="center">
                        <GridItem xs={12} sm={6} style={{ textAlign: 'center' }}>
                            <Button className={classes.button} component={Link} to="/premios" color="github">
                                <Typography variant="h4" component="h2">
                                    Prémios
                        </Typography>
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={6} style={{ textAlign: 'center' }}>
                            <Button className={classes.button} component={Link} to="/membros" color="github">
                                <Typography variant="h4" component="h2">
                                    Membros
                        </Typography>
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}