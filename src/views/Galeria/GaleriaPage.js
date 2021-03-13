import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import HeaderPage from "views/HeaderPage.js";
import Typography from '@material-ui/core/Typography';
import data from "assets/json/eventos.json"
import Footer from "components/Footer/Footer.js";
import image1 from "assets/img/eventos/I Gala AMARGAIA 2018/37408085_1939724092758030_3019206488322211840_o.jpg";
import  "assets/scss/plugins/plugin-galeria.scss"
import GaleriaCard from "./GaleriaCard.js"
import galeriaStyle from "assets/jss/material-kit-react/views/sobrenosPage.js";

const useStyles = makeStyles(galeriaStyle);

    

function getImages() {
    var fotos = data.eventos.map(function (i, index) {
        return (
          <GaleriaCard key={index} evento={i.nome} />
        )
      })

    return fotos;
}

export default function GaleriaPage(props) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const fotos = getImages();
    const { ...rest } = props;
    return (
        <div>
            <HeaderPage change_height={50} />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image1 + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                <h2>Galeria</h2>
                <Typography variant="h5" align="center">
                    Clique nos titulos para ampliar as fotos
                </Typography> 
                    <GridContainer>
                       {fotos}
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    )
}