import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Link } from "react-router-dom";
import icon from "assets/img/headerIcon.png"
import "assets/css/header.css"

export default function CancioneiroPage(props) {

    const { change_height, ...rest } = props;
    return (
        <Header
            icon={(
                <span className="container">
                    <img class="col-sm-12 hidden-lg hidden-md hidden-xs" className="icon" src={icon}>
                    </img>
                </span>
            )}
            color="transparent"
            brand={(<div className="brand">
                Tuna Académica de Oliveira do Douro
            </div>
            )}
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: change_height,
                color: "white",
            }}
            {...rest}
        />
    );
}
