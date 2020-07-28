/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(styles);

export default function HeaderBrand(props) {
  const classes = useStyles();
  return (

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a class="navbar-brand" href="#">
          <img src="/bootstrap-material-design/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>

        <h2 className={classes.title}>Tuna Académica de Oliveira do Douro</h2>

      </ListItem>
    </List>
  );
}
