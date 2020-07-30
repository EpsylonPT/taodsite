import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


export default function CancioneiroPage(props) {

    const { change_height, ...rest } = props;
    return (
        <Header
            color="transparent"
            brand="Tuna Académica de Oliveira do Douro"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: change_height,
                color: "white"
            }}
            {...rest}
        />
    );
}
