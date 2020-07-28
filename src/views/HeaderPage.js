import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

const dashboardRoutes = [];

export default function CancioneiroPage(props) {

    const { ...rest } = props;
    return (
        <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="Tuna Académica de Oliveira do Douro"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
            {...rest}
        />
    );
}
