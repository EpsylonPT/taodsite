import React from "react";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import Slider from "react-slick";
import "assets/css/patrocinios.css"
import patrocinios from "assets/json/patrocinios"
import styles from "assets/jss/material-kit-react/views/socioPage.js";

const carousel_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    adaptiveHeight: false
};

const useStyles = makeStyles(styles);
function getImages() {
    var result = patrocinios.items.map(function (i, index) {
        var foto = require("assets/img/patrocinios/" + i.foto);
        return (
            <div id="container">
                <a href={i.link} target="_blank">
                <img src={foto} alt={index} className="slick-image" />
                </a>
                <div id ="content"> 
                <span>
                    {i.desconto}
                </span>
                </div>
            </div>
        )
    })
    return result;
}


const fotos = getImages();


export default function Patrocinios(props) {
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <GridItem xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Parceiros e Benefícios</h2>
            <Card>
                <Slider {...carousel_settings} className="slick-slider">
                    {fotos}
                </Slider>
            </Card>
        </GridItem>
    );
}