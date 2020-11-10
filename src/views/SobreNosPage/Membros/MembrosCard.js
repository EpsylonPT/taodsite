import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Card from "components/Card/Card.js";
const textStyle = {
    textAlign: "center"
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        margin: "auto",
        width: theme.spacing(15),
        height: theme.spacing(15),
    },

    special: {
        background: 'linear-gradient(45deg, #474747 10%, #000000 90%)'
    },
    special_letters: {
        color: "#ffffff"
    }
}));

export default function MembrosCard(props) {

    const { membro, tipo, ...rest } = props;

    const nome = membro.nome;
   
    var membro_show;

    const classes = useStyles();

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    function getImagem(path) {
        try {
            return require("assets/img/membros/" + path + ".jpg");
        } catch (e) {
            return "";
        }
    }

    const img_src = getImagem(membro.img_src);

    function getMembro() {

        if (tipo == "caloiro") {
            membro_show = (
                <Card className={classes[cardAnimaton]} id={"card_" + nome}>
                    <button>
                        <Avatar src={img_src} className={classes.large} />
                        <Typography gutterBottom variant="h5" component="h2">
                            {nome}
                        </Typography>
                        <Typography align="left" variant="body2" color="textSecondary">
                            <b>Entrada na tuna</b>: {membro.entrada} <p />
                            <b>Padrinho</b>: {(membro.padrinho) ? membro.padrinho : "-"}  <p />
                            <b>Madrinha</b>: {(membro.madrinha) ? membro.madrinha : "-"}  <p />
                            <b>Instrumento</b>: {(membro.instrumento) ? membro.instrumento : "-"}  <p />
                            <b>Naipe</b>: {membro.naipe}  <p />
                            <b>Curso</b>: {membro.curso}  <p />
                            <b>Estabelecimento de ensino superior</b>: {membro.escola}  <p />
                        </Typography>
                    </button>
                </Card>
            );
        } else {
            membro_show = (
                <Card className={classes[cardAnimaton]} id={"card_" + nome}>
                    <button className={classes.special}>
                        <Avatar src={img_src} className={classes.large} />
                        <Typography gutterBottom variant="h5" component="h2" className={classes.special_letters}>
                            {nome}
                        </Typography>
                        <Typography align="left" variant="body2" className={classes.special_letters}>
                            <b>Entrada na tuna</b>: {membro.entrada} <p />
                            <b>Passagem a tuno</b>: {membro.passagem}  <p />
                            <b>Padrinho</b>: {(membro.padrinho) ? membro.padrinho : "-"}  <p />
                            <b>Madrinha</b>: {(membro.madrinha) ? membro.madrinha : "-"}  <p />
                            <b>Instrumento</b>: {(membro.instrumento) ? membro.instrumento : "-"}  <p />
                            <b>Naipe</b>: {membro.naipe}  <p />
                            <b>Curso</b>: {membro.curso}  <p />
                            <b>Estabelecimento de ensino superior</b>: {membro.escola}  <p />
                        </Typography>
                    </button>
                </Card>
            );
        }
    }

    getMembro();
    return (
        <GridItem xs={12} sm={12} md={4} id={"gridItem_" + nome}>
            {membro_show}
        </GridItem >
    )



}