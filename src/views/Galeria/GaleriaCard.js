import React from "react";
import {makeStyles } from "@material-ui/core/styles";
// react component for creating beautiful carousel
import Slider from "react-slick";
// material-ui components
// @material-ui/icons
import styles from "assets/jss/material-kit-react/views/galeriaPage.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import data from "assets/json/galeria.json"
import "assets/scss/plugins/plugin-galeria.scss";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import "./Galeria.css";


const useStyles = makeStyles(styles);

function getImages(evento) {

    var fotos = data.fotos.map(function (i, index) {
        if (i.nome === evento) {
            var foto = require("assets/img/eventos/" + i.nome + i.imageName);
            return (
                <div key={foto}>
                    <img key={foto} src={foto} alt={index} className="slick-image" />
                </div>
            )
        }
    })
    return fotos;
}

export default function GaleriaCard(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    const textStyle = {
        textAlign: "center"
    };

    const handleDialogOpen = () => {
        setIsOpen(true)
    }
    const handleDialogClose = () => {
        setIsOpen(false)
    }

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        textAlign:'center'
    };
    const settings2 = {
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true
    };
    const { evento } = props;
    const fotos = getImages(evento);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    return (
        <GridItem xs={12} sm={12} md={4} id={"gridItem_" + evento}>
            <Card className={classes[cardAnimaton]} id={"card_" + evento}>
            <Slider {...settings}>
                    {fotos}
            </Slider>
                <button onClick={() => handleDialogOpen("ax", "asx", "asd", "asd")}>
                    <div style={textStyle}>
                        {evento}
                    </div>
                </button>
                <Dialog id={"modal"}
                     
                    open={isOpen}
                    style={{ backgroundColor: 'transparent',textAlign:'center'}}
                    disableScrollLock 
                    onClose={handleDialogClose}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description"
                    maxWidth="md"
                    overlaystyle={{ backgroundColor: 'transparent' }
                    }
                >
                  <Slider {...settings2} class="slick-slider">
                    {fotos}
                  </Slider>           
                 
                </Dialog >
            </Card>
        </GridItem >
    )
}