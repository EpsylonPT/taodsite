import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// core components
import { Link } from "react-router-dom";
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import image from "assets/img/bg7.jpg";
import PremiosCard from "./PremioCard.js"
import data from "assets/json/premios.json"
import Button from "components/CustomButtons/Button.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle";
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

export default function AcercaPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
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