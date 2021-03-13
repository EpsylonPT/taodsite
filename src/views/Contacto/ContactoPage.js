import React from "react";
// @material-ui/core components
import {withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import Button from '@material-ui/core/Button';

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import "./Contacto.css"
import image from "assets/img/eventos/2.jpg";


const useStyles = makeStyles(styles);

const MapsButton = withStyles({
  root: {
      background: "#6e6e6e",
      color: "white",
      '&:hover,&:focus': {
        backgroundColor: "#525252",
        color: "white",
      },
      borderRadius: 3,
      border: 0,
      height: 50,
      width: 300,
      marginLeft: 10,
      marginBottom: 2,
      marginRight: 10,
      marginTop: 20

  },
})(Button);

export default function ContactoPage() {

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
      
        <div className={classes.container}>
          <h2>Contacto</h2>
       <p/>
       <div>
          <Typography variant="h4" align="left">
          Fala connosco!
          </Typography> 

          <Typography variant="h5" align="left" gutterBottom>
          Email:  <a href={"mailto:tao.douro@gmail.com"}><b>tao.douro@gmail.com</b></a>
          </Typography> 
          </div>
          <div style={{marginTop: 80}}>
          <p/>
          <Typography variant="h4" align="left">
            Vem nos visitar! <p/>
            </Typography> 
          <Typography variant="h5" align="left">
          Sede:   <b >Praceta Dina Teresa 4430-378, Vila Nova de Gaia</b> <p/>
          Ensaios: <b>Sexta-Feira - 21:30 </b>
          </Typography> 
          </div>
          <MapsButton target="_blank" href="https://goo.gl/maps/sGVXEkax9VtcFK4k9">Google Maps</MapsButton>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
