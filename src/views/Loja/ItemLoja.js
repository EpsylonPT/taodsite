import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";

import Card from "components/Card/Card.js";
import {refresh} from "./Carrinho.js";
import "./Loja.css";
import "assets/scss/plugins/plugin-galeria.scss";

const useStyles = makeStyles(styles);

export default function ItemLoja(props) {
    const { item } = props;

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

    const AddButton = withStyles({
        root: {
            background: "#1DB954",
            borderRadius: 7,
            '&:hover': {
                backgroundColor: "#92d1a8",
                color: 'white'
            },
            '&:focus': {
                backgroundColor: "#1DB954",
                color: 'white'
            },
            fontSize: "50px",
            color: "white",
        },
    })(Button);
    const RemoveButton = withStyles({
        root: {
            background: "#1DB954",
            borderRadius: 7,
            '&:hover': {
                backgroundColor: "#92d1a8",
                color: 'white'
            },
            '&:focus': {
                backgroundColor: "#1DB954",
                color: 'white'
            },
            fontSize: "50px",
            color: "white",
        },
    })(Button);

    function getImages() {
        var fotos = item.fotos.map(function (i, index) {
            var foto = require("assets/img/loja/" + item.pasta + "/" + i + ".jpg");
            return (
                <div>
                    <img key={foto} src={foto} alt={index} className="slick-image" />
                </div>
            )
        })
        return fotos;
    }

    const fotos = getImages();

    const preco_socio = (item.preco_socio != item.preco) ? ("Preço sócio:" + item.preco_socio + "€"):"";
    const preco_n_socio = (        
           "Preço: " + item.preco + "€"
    );

    let numero_items = 0;

    function add(){
        numero_items += 1;
        updateValue()
    }

    function remove(){
        if(numero_items > 0){
            numero_items -= 1;
        }
        updateValue()
    }

    function updateValue(){
     document.getElementById("value_" + nome).innerHTML = numero_items;
     refresh(item,numero_items);
    }

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
                    <GridContainer justify="flex-end">
                          <GridItem xs={12} id={"gridItem2_" + nome}>
                            <Typography style={{marginTop:70}}variant="h4" component="h2">
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
                            </GridItem >
                          <GridItem xs={12} id={"gridItem3_" + nome} 
                             style={{ display: 'flex',
                                     alignItems: 'center',
                                     marginTop: "40px",
                                     justifyContent: 'center'}}>
                            <ButtonGroup>
                            <RemoveButton id={"RemoveButton_" + nome} onClick={remove}>
                               -
                            </RemoveButton>
                            <Typography variant="h2" id={"value_" + nome} style={{ alignSelf: "center", marginLeft: "10px", marginRight: "10px"}}>
                                {numero_items}
                            </Typography> 
                            <AddButton id={"AddButon_" + nome} onClick={add}>
                               +
                            </AddButton>  
                            </ButtonGroup>
                            </GridItem >
                    </GridContainer>
                    </GridItem >
                </GridContainer>
            </Card >
        </GridItem >
    )

}