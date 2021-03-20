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
import validator from 'validator'

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
function changeName(e,setErrorNome){ 
    if (e.target.value == ''){
        setErrorNome('Nome não pode estar vazio');
    }else{
        CheckoutFormValues.user_nome = e.target.value; 
        setErrorNome('');
    }
}
function changeEmail(e,setErrorEmail){ 
    if(e.target.value == ''){
        setErrorEmail('');
        return;
    }
    if (!validator.isEmail(e.target.value)){
        setErrorEmail('Email Inválido');
    }else{
        CheckoutFormValues.user_email = e.target.value; 
        setErrorEmail('');
    }
}

function changeTelefone(e,setErrorTelefone){ 
    if(e.target.value == ''){
        setErrorTelefone('');
        return;
    }
    if (!validator.isMobilePhone(e.target.value,['pt-PT'])){
        setErrorTelefone('Telefone Inválido');
    }else{
        CheckoutFormValues.user_telefone = e.target.value; 
        setErrorTelefone('');
    }
}

export default function CheckoutForm(props) {
    const [error_nome,setErrorNome] = React.useState("");
    const [error_email,setErrorEmail] = React.useState("");
    const [error_telefone,setErrorTelefone] = React.useState("");

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
                                onChange={(e) => {changeName(e,setErrorNome)}} error={error_nome.length === 0 ? false : true  } helperText={error_nome}/>
                            <br />
                            <TextFieldCheckout id="email" type='text' name='user_email' placeholder='Email' label="Email" variant="outlined" 
                            onChange={(e) => { changeEmail(e,setErrorEmail) }} error={error_email.length === 0 ? false : true  } helperText={error_email} />
                            <br />
                            <TextFieldCheckout id="telefone" type='text' name='user_telefone' placeholder='Telefone' label="Telefone" variant="outlined" 
                            onChange={(e) => { changeTelefone(e,setErrorTelefone)}} error={error_telefone.length === 0 ? false : true  } helperText={error_telefone}/>
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
