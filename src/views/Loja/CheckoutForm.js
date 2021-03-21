import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";

// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReCAPTCHA from "react-google-recaptcha";
init("user_OPj3y91OjvXfVjAvC4H6F");

const captchaKey = "6LfBeocaAAAAAF2JY93hxRBaHMaRqpliMNXlZtN9";
var captchaPassed = false;

const useStyles = makeStyles(styles);

const TextFieldCheckout = withStyles((theme) => ({
    root: {
        right: "20%",
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
        right: "20%",
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


function onChangeCaptcha(value) {
    captchaPassed = true;
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
        CheckoutFormValues.user_email = e.target.value; 
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
        CheckoutFormValues.user_telefone = e.target.value; 
        setErrorTelefone('Telefone Inválido');
    }else{
        CheckoutFormValues.user_telefone = e.target.value; 
        setErrorTelefone('');
    }
}

function handleClickOpen(setOpen){
    setOpen(true);
}

function handleClose(setOpen){
    setOpen(false)
}
export default function CheckoutForm(props) {
    const [error_nome,setErrorNome] = React.useState("");
    const [error_email,setErrorEmail] = React.useState("");
    const [error_telefone,setErrorTelefone] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    function sendEmail() {
        const emailETelefoneNecessariosMessage = 'Email ou telefone necessários'
        CheckoutFormValues.user_nome.length === 0 ? setErrorNome('Nome obrigatório') : setErrorNome("");
      
        if(CheckoutFormValues.user_email.length === 0 && CheckoutFormValues.user_telefone.length === 0){
            setErrorEmail(emailETelefoneNecessariosMessage)
            setErrorTelefone(emailETelefoneNecessariosMessage)
            return;
        }

        if( (error_telefone !== emailETelefoneNecessariosMessage && error_telefone !== '') || (error_email !== emailETelefoneNecessariosMessage && error_email.length !== 0)  ){
            handleClickOpen(setOpen)
            return;
        }
       
        

        if(!captchaPassed){
            handleClickOpen(setOpen)
            return;
        }
        CheckoutFormValues.itens = getItems();
        send('default_service', 'template_kvzn3jo', CheckoutFormValues)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        }
    
    if (getItems()=="") {
            return <Redirect to='/loja'/>;
    }

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
                                onChange={(e) => {changeName(e,setErrorNome)}} error={error_nome.length === 0 ? false : true  } helperText={error_nome} onKeyUp={(e) => {changeName(e,setErrorNome)}}/>
                            <br />
                            <TextFieldCheckout id="email" type='text' name='user_email' placeholder='Email' label="Email" variant="outlined" 
                            onChange={(e) => { changeEmail(e,setErrorEmail) }} error={error_email.length === 0 ? false : true  } helperText={error_email}  onKeyUp={(e) => {changeEmail(e,setErrorEmail)}}/>
                            <br />
                            <TextFieldCheckout id="telefone" type='text' name='user_telefone' placeholder='Telefone' label="Telefone" variant="outlined" 
                            onChange={(e) => { changeTelefone(e,setErrorTelefone)}} error={error_telefone.length === 0 ? false : true  } helperText={error_telefone} onKeyUp={(e) => { changeTelefone(e,setErrorTelefone)}} />
                            <br />
                            <TextFieldCheckoutMessage id="mensagem" type='text' name='mensagem' placeholder='Mensagem' label="Mensagem" variant="outlined" 
                            onChange={(e) => { CheckoutFormValues.message = e.target.value }} />
                            <br />
                            <br />
                            <ReCAPTCHA badge="inline" size="normal" sitekey={captchaKey} theme="dark" onChange={onChangeCaptcha} />
                            <br />
                            <SendButton onClick={sendEmail}>Enviar</SendButton>
                        </form>
                    </GridContainer>
                    <Dialog
                        open={open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert_description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Aviso"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert_description">Por favor valide todos os dados e complete o reCaptcha.</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={(e) => {handleClose(setOpen)}} autoFocus>
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
