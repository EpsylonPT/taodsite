import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import data from "assets/json/loja.json"
import image from "assets/img/loja/Emblema/emblemaTAOD2.jpg";

import ItemLoja from "./ItemLoja.js"

const useStyles = makeStyles(styles);

function getItems() {
  var items = data.items.map(function (i, index) {
    return (
      <ItemLoja key={index} item={i} />
    )
  })
  return items;
}

export default function LojaPage(props) {

  const classes = useStyles();
  const { ...rest } = props;

  const items = getItems()

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
          <h2>Loja</h2>
       
          <Typography variant="h5" align="center">
          Ao encomendar, fornece o número de sócio para teres o desconto que mereces!
          <p></p>Se ainda não és sócio,  <Link style={{color: "#1DB954"}} to = "/socio">     <b>clica aqui</b> </Link>
          </Typography> 
          <GridContainer justify="center">
            {items}
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
