import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";

import Card from "components/Card/Card.js";
import "./Loja.css";

const textStyle = {
    textAlign: "center"
};

const useStyles = makeStyles(styles);

export default function ItemLoja(props) {
    const { item, ...rest } = props;

    const classes = useStyles();

    const nome = item.nome;

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    const carousel_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true
    };

    const OlxButton = withStyles({
        root: {
            background: "#23e5db",
            borderRadius: 3,
            '&:hover': {
                backgroundColor: "#a2ebe7",
                color: '#FFF'
            },
            borderColor: '#0063cc',
            border: 0,
            color: "black",
            height: 35,
            marginBottom: -10,
            marginLeft: 10,
            marginBottom: 2,
            marginRight: 10,

        },
    })(Button);

    const EmailButton = withStyles({
        root: {
            background: "#1DB954",
            borderRadius: 3,
            '&:hover': {
                backgroundColor: "#92d1a8",
                color: '#FFF'
            },
            border: 0,
            color: "black",
            height: 35,
            marginTop: 50,
            marginLeft: 10,
            marginBottom: 2,
            marginRight: 10,

        },
    })(Button);

    function getImages() {
        var fotos = item.fotos.map(function (i, index) {
            var foto = require("assets/img/loja/" + item.pasta + "/" + i + ".jpg");
            return (
                <div>
                    <img src={foto} alt={index} className="slick-image" />
                </div>
            )
        })
        return fotos;
    }

    const fotos = getImages();

    const preco_socio = (item.preco_socio) ? ("Preço sócio:" + item.preco_socio):"";
    const preco_n_socio = (        
           "Preço: " + item.preco
    );

    return (
        <GridItem xs={12} id={"gridItem_" + nome}>
            <Card className={classes[cardAnimaton]} id={"card_" + nome}>
                <GridContainer justify="center">
                    <GridItem xs={6} id={"gridItem_" + nome}>
                        <Card className="imageCard" id={"card_" + nome}>
                            <Slider {...carousel_settings} className="slick-slider">
                                {fotos}
                            </Slider>
                        </Card>
                    </GridItem >
                    <GridItem xs={6} id={"gridItem_" + nome}>
                        <Card className="dataCard" id={"card_" + nome}>
                            <Typography variant="h4" component="h2">
                                {nome}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {item.descricao}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {preco_n_socio}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {preco_socio}
                            </Typography>
                            <EmailButton>
                                Encomendar por email
                            </EmailButton>
                            <OlxButton>
                                Encomendar por OLX
                            </OlxButton>
                        </Card>
                    </GridItem >
                </GridContainer>
            </Card >
        </GridItem >
    )

}