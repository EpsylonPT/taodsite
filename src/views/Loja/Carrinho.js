import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from "components/Card/Card.js";
import "./Loja.css";
import "assets/scss/plugins/plugin-galeria.scss";

const useStyles = makeStyles(styles);

let items = {};

export function refresh(item,quantity){
    items[item] = quantity
    recalculate()
}

function recalculate(){
    let n_items = 0;
    let desc = "";

    Object.entries(items).forEach(element => {
      n_items += items[element[0]]
      desc += element[0]  + " - " + items[element[0]] + "</p>";
   });
   
   document.getElementById("carrinho").innerHTML =  "<b>Carrinho: " + n_items + "</b>";
      
   document.getElementById("carrinho_desc").innerHTML =  desc;
}

function getDesc(){
    
}

const Label = withStyles({
    root: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBotton: 20,
      
    },
})(Typography);

const CheckoutButton = withStyles({
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
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBotton: 100,
      
    },
})(Button);


export default function Carrinho() {

    const classes = useStyles();

    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    return (
        <GridItem >
                <Card className={classes[cardAnimaton]}>
                    
                            <Label id="carrinho" variant="h5" align="center">
                            <b>Carrinho: 0 </b>
                            </Label> 
                            <Label id="carrinho_desc" variant="h5" align="center">
                            {getDesc()}
                            </Label> 
                            <CheckoutButton>
                            <b> Checkout </b>
                            </CheckoutButton>
                       
                </Card >
        </GridItem >
    )

}