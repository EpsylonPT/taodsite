import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import Typography from '@material-ui/core/Typography';
import image from "assets/img/bg7.jpg";
import MembrosCard from "./MembrosCard.js"
import data from "assets/json/membros.json"
import sobrenosStyles from "assets/jss/material-kit-react/views/sobrenosPage.js";

const useStyles = makeStyles(sobrenosStyles);

var magister;
var vice_magister;
var tunos;
var caloiros;

function getMagistereVice() {
    magister = data.magister;
    vice_magister = data.vice;
}
function getTunosECaloiros() {
    caloiros = data.membros.map(function (i, index) {
        if(i.passagem===""){
            return (
                <MembrosCard key={index} membro={i} tipo="caloiro"/>
            )
        }
    })
    tunos = data.membros.map(function (i, index) {
        if(i.passagem!="" && (i.nome != magister.nome) && (i.nome!= vice_magister.nome)){
            return (
                <MembrosCard key={index} membro={i} tipo="tuno"/>
            )
        }
    })
}

export default function AcercaPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    getMagistereVice();
    getTunosECaloiros();

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
                    <Typography gutterBottom variant="h5" component="h2">
                        Magister e Vice-Magister
                    </Typography>
                    <GridContainer justify="center">
                        <MembrosCard key={0} membro={magister} />
                        <MembrosCard key={1} membro={vice_magister} />
                    </GridContainer>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tunos
                    </Typography>
                    <GridContainer justify="center">
                        {tunos}
                    </GridContainer>
                    <Typography gutterBottom variant="h5" component="h2">
                        Caloiros
                    </Typography>
                    <GridContainer justify="center">
                        {caloiros}
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}