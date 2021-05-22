import React from "react";
import Paper from '@material-ui/core/Paper';
import Slider from "react-slick";
import "assets/css/patrocinios.css"
import patrocinios from "assets/json/patrocinios"
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const carousel_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true
};

function getImages() {
    var result = patrocinios.items.map(function (i, index) {
        var foto = require("assets/img/patrocinios/" + i.foto);
        return (
            <div id="element" key={i.nome}>
                 <a href={i.link} target="_blank">      
                <div className="patrocinio_container">
                <img src={foto} alt={index} className="patrocinio_image"/>
                </div>
                </a>
                <div id="name">
                    <Typography variant="button" align="center">
                        {i.nome}
                    </Typography>
                </div>
                <div id="content">
                    <Typography variant="body1" align="center">
                        {i.desconto}
                    </Typography>
                </div>
            </div>
        )
    })
    return result;
}


const fotos = getImages();


export default function Patrocinios(props) {
    const { children, className, ...rest } = props;
    return (
        <Paper >
            <h2>Parceiros e Benefícios</h2>
            <div id="container">
                <Slider {...carousel_settings} >
                    {fotos}
                </Slider>
            </div>
        </Paper>
    );
}