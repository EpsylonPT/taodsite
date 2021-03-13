import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import "./Contacto.css"
import image from "assets/img/eventos/2.jpg";


const useStyles = makeStyles(styles);


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
          <Typography variant="h4" align="left">
          Fala connosco!
          </Typography> 

          <Typography variant="h5" align="left">
          Email:  <b>tao.douro@gmail.com</b>
          </Typography> 
          <p/>
          <Typography variant="h4" align="left">
            Vem nos visitar! <p/>
            </Typography> 
          
          <Typography variant="h5" align="left">
          Sede:   <b>Praceta Dina Teresa 4430-378, Vila Nova de Gaia</b> <p/>
          Ensaios: <b>Sexta-Feira - 21:30 </b>
          </Typography> 
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
