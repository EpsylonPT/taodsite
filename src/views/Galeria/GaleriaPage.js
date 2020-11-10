import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import HeaderPage from "views/HeaderPage.js";
import image from "assets/img/bg7.jpg";
import data from "assets/json/eventos.json"
import Footer from "components/Footer/Footer.js";
import image1 from "assets/img/eventos/1.jpg";
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

export default function GaleriaPage(props) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const fotos = getImages();
    const { ...rest } = props;
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
                    <GridContainer>
                       {fotos}
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}