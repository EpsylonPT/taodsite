import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import CheckoutFormValues from "views/Loja/CheckoutFormValues.js";
import CheckoutFormError from "views/Loja/CheckoutFormError.js";

import styles from "assets/jss/material-kit-react/views/checkoutForm.js";

import image from "assets/img/loja/Emblema/emblemaTAOD2.jpg";
import {getItems} from "./Carrinho.js";

import { init, send } from 'emailjs-com';
import { Button } from "@material-ui/core";
init("user_OPj3y91OjvXfVjAvC4H6F");

const useStyles = makeStyles(styles);

const TextFieldCheckout = withStyles((theme) => ({
    root: {
        right: "40%",
        '& > *': {
            margin: theme.spacing(1),
            width: '180%',
            color: "#FFFFFF",
        },
        '& label.Mui-focused': {
            color: 'blue',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'blue',
            },
        },
    }
}))(TextField);

const TextFieldCheckoutMessage = withStyles((theme) => ({
    root: {
        right: "40%",
        height: "70",
        '& > *': {

            margin: theme.spacing(1),
            width: '180%',
            color: "#FFFFFF",
        },
        '& label.Mui-focused': {
            color: 'blue',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'blue',
            },
        },
    }
}))(TextField);


const SendButton = withStyles({
    root: {
        background: "#000000",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: "10%",
        width: "180%",
        right: "40%"
    },
})(Button);

function sendEmail() {
    CheckoutFormValues.itens = getItems();
    send('default_service', 'template_kvzn3jo', CheckoutFormValues)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

export default function CheckoutForm() {
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
                    <h2>Formulário de checkout</h2>

                    <Typography variant="h5" align="center">
                        Preenche todos os campos
                    </Typography>
                    <GridContainer justify="center">
                        <form id='checkout-form' className={classes.root} noValidate autoComplete="off">
                            <TextFieldCheckout id="nome" type='text' name='user_nome' placeholder='Nome' label="Nome" variant="outlined"
                                onChange={(e) => { CheckoutFormValues.user_nome = e.target.value }}/>
                            <br />
                            <TextFieldCheckout id="email" type='text' name='user_email' placeholder='Email' label="Email" variant="outlined" 
                            onChange={(e) => { CheckoutFormValues.user_email = e.target.value }} />
                            <br />
                            <TextFieldCheckout id="telefone" type='text' name='user_telefone' placeholder='Telefone' label="Telefone" variant="outlined" 
                            onChange={(e) => { CheckoutFormValues.user_telefone = e.target.value }} />
                            <br />
                            <TextFieldCheckoutMessage id="mensagem" type='text' name='mensagem' placeholder='Mensagem' label="Mensagem" variant="outlined" 
                            onChange={(e) => { CheckoutFormValues.message = e.target.value }} />
                            <br />
                            <SendButton onClick={sendEmail}>Enviar</SendButton>
                        </form>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
