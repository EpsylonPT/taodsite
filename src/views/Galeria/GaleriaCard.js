import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import styles from "assets/jss/material-kit-react/views/galeriaPage.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import HeaderPage from "views/HeaderPage.js";
import image from "assets/img/bg7.jpg";
import data from "assets/json/galeria.json"
import Footer from "components/Footer/Footer.js";
import image1 from "assets/img/eventos/1.jpg";
import "assets/scss/plugins/plugin-galeria.scss";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";


const useStyles = makeStyles(styles);

function getImages(evento) {

    var fotos = data.fotos.map(function (i, index) {
        if (i.nome === evento) {
            var foto = require("assets/img/eventos/" + i.nome + i.imageName);
            return (
                <div>
                    <img src={foto} alt={index} className="slick-image" />
                </div>
            )
        }
    })
    return fotos;
}

export default function GaleriaPage(props) {
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
        autoplay: true
    };
    const { evento, ...rest } = props;
    const fotos = getImages(evento);

   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    return (
        <GridItem xs={12} sm={12} md={4} id={"gridItem_" + evento}>
            <Card className={classes[cardAnimaton]} id={"card_" + evento}>
                <button onClick={() => handleDialogOpen("ax", "asx", "asd", "asd")}>
                    <div style={textStyle}>
                        {evento}
                    </div>
                </button>
                <Dialog id={"modal"}
                    open={isOpen}
                    style={{ backgroundColor: 'transparent' }}
                    onClose={handleDialogClose}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description"
                    fullWidth="sm"
                    maxWidth="sm"
                    overlayStyle={{ backgroundColor: 'transparent' }
                    }
                >
                    <DialogContent dividers
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                    <GridContainer>
                        <GridItem>
                            <Card>
                                <Carousel {...settings} className = "slick-slider">
                                    {fotos}
                                </Carousel>
                            </Card>
                        </GridItem>
                    </GridContainer>
                        <p />
                    </DialogContent>
                </Dialog >
            </Card>
        </GridItem >
    )
}