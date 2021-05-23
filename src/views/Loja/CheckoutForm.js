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
init("user_OPj3y91OjvXfVjAvC4H6F");

const useStyles = makeStyles(styles);

const TextFieldCheckout = withStyles((theme) => ({
    root: {
        right: "45%",
        '& > *': {
            margin: theme.spacing(1),
            width: '180%',
            color: "#FFFFFF",
        },
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    }
}))(TextField);

const TextFieldCheckoutMessage = withStyles((theme) => ({
    root: {
        right: "45%",
        height: "70",
        '& > *': {

            margin: theme.spacing(1),
            width: '180%',
            color: "#FFFFFF",
        },
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    }
}))(TextField);


const SendButton = withStyles({
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
        width: "120%",
        right: "10%"
    },
})(Button);

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
        CheckoutFormValues.user_email = e.target.value;
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
        CheckoutFormValues.user_telefone = e.target.value; 
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
    document.getElementById("alert_title").innerHTML = "Sucesso"
    document.getElementById("alert_description").innerHTML = "O seu pedido foi registado com sucesso! Em breve será contactado pela TAOD confirmar a encomenda e proceder ao respetivo pagamento.";
}

function handleClose(setOpen,props){
    setOpen(false)
    if( document.getElementById("alert_title").innerHTML === "Sucesso"){
        props.history.push('/loja')
    }
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

        CheckoutFormValues.itens = getItems();
        send('default_service', 'template_kvzn3jo', CheckoutFormValues)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                handleClickOpen(setOpen)
            }, function (error) {
                console.log('FAILED...', error);
            });
        }
    
    if (getItems()=="") {
            return <Redirect to='/loja'/>;
    }

    return (
        <div id="checkout_form">
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
                            <TextFieldCheckout id="telefone" type='text' name='user_telefone' placeholder='Telemovel' label="Telemovel" variant="outlined" 
                            onChange={(e) => { changeTelefone(e,setErrorTelefone)}} error={error_telefone.length === 0 ? false : true  } helperText={error_telefone} onKeyUp={(e) => { changeTelefone(e,setErrorTelefone)}} />
                            <br />
                            <TextFieldCheckoutMessage id="mensagem" type='text' name='mensagem' placeholder='Mensagem' label="Mensagem" variant="outlined" 
                            onChange={(e) => { CheckoutFormValues.message = e.target.value }} />
                            <br />
                            <SendButton onClick={sendEmail}>Enviar</SendButton>
                        </form>
                    </GridContainer>
                    <Dialog
                        open={open}
                        disableScrollLock 
                        aria-labelledby="alert_title"
                        aria-describedby="alert_description"
                    >
                        <DialogTitle id="alert_title">Aviso</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert_description">Por favor valide todos os dados e tente outra vez.</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={(e) => {handleClose(setOpen,props)}} autoFocus>
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
