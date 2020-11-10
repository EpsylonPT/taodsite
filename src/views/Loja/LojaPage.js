import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import data from "assets/json/loja.json"

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
          backgroundImage: "url(" + "image" + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
      
        <div className={classes.container}>
          <h2>Loja</h2>
          <GridContainer justify="center">
            {items}
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
