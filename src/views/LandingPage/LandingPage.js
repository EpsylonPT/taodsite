import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderPage from "views/HeaderPage.js";
import Parallax from "components/Parallax/Parallax.js";
import Slider from "react-slick";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import "assets/scss/plugins/plugin-galeria.scss";

import image from "assets/img/eventos/1.jpg"

import patrocinios from "assets/json/patrocinios"
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

  const carousel_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true
    };

function getImages() {
        var result = patrocinios.items.map(function (i, index) {
            var foto = require("assets/img/patrocinios/" + i.foto + ".jpg");
            return (
                <div>
                    <img src={foto} alt={index} className="slick-image" />
                </div>
            )
        })
        return result;
    }

const fotos = getImages();

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderPage change_height={400} />
        <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
          <div className={classes.container} >
            <div style={{top: 50}}>
              <GridContainer  alignItems="center"  justify="center">
                <GridItem xs={12}>
                  <h1 className={classes.title}>Website oficial</h1>
                  <h4>
                  Aqui é para escrever um textinho todo bonitinho, joão vitor começa a trabalhar
                  </h4>
                  <br />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h2 className={classes.title}>Parceiros e Benefícios</h2>
                <Card>
                    <Slider {...carousel_settings} className="slick-slider">
                        {fotos}
                    </Slider>
                </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
         </div>
       <Footer whiteFont />
    </div>
  );
}
