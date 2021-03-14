import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import "./Loja.css";
import "assets/scss/plugins/plugin-galeria.scss";

const useStyles = makeStyles(styles);

let items = {};

export function refresh(item,quantity){
    let name = item.nome;
    let preco = item.preco;
    let preco_socio = item.preco_socio;
    items[name] = {preco,preco_socio, quantity}
    recalculate()
}

function recalculate(){
    let desc = "";
    let preco = 0;
    let preco_socio = 0;

    Object.entries(items).forEach(element => {
     let item = element[1];
      if(item.quantity != 0)
          desc += element[0]  + " - " + item.quantity + "</p>";

      preco += Number(item.preco * item.quantity);
      preco_socio += (item.preco_socio * item.quantity);
   });
   
   document.getElementById("carrinho").innerHTML =  "<b>Carrinho: </b>";
      
   document.getElementById("carrinho_desc").innerHTML =  desc;
         
   document.getElementById("carrinho_total").innerHTML =  "Total: " + preco + "€";;

   if(preco != preco_socio){
    document.getElementById("carrinho_total_socio").innerHTML =  "Total para sócio: " + preco_socio + "€";
   }else{
    document.getElementById("carrinho_total_socio").innerHTML =  ""
   }
}
const LabelCarrinho = withStyles({
    root: {
        color: "black",
        marginTop: 40,
    },
})(Typography);

const LabelDesc= withStyles({
    root: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBotton: 20,
      
    },
})(Typography);

const LabelTotal = withStyles({
    root: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBotton: 50,
      
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
        marginTop: 10      
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
                    
                            <LabelCarrinho id="carrinho" variant="h4" align="center">
                            <b>Carrinho</b>
                            </LabelCarrinho> 
                            <Divider></Divider>
                            <LabelDesc id="carrinho_desc" variant="h5" align="center"/> 
                            <Divider></Divider>
                            <LabelTotal id="carrinho_total" variant="h4" align="center"/> 
                            <LabelTotal id="carrinho_total_socio" variant="h4" align="center"/> 
                            <CheckoutButton component={Link} to="/checkout">
                           <b> Checkout</b> 
                            </CheckoutButton>
                       
                </Card >
        </GridItem >
    )
}