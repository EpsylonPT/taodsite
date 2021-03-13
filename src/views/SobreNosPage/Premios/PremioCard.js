import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import GridItem from "components/Grid/GridItem.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import Card from "components/Card/Card.js";

const textStyle = {
    textAlign: "center"
};

const useStyles = makeStyles(styles);

export default function PremiosCard(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    const handleDialogOpen = () => {
        setIsOpen(true)
    }
    const handleDialogClose = () => {
        setIsOpen(false)
    }

    const { premio } = props;

    const classes = useStyles();

    const nome = premio.nome;

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    const premiosRecebidos = premio.premiosRecebidos.map(function (linha, index) { 
            return (
                <p key={index} style={textStyle}>
                    <b>{linha}</b>
                </p>
            )
       
    }
    )

    return (
        <GridItem xs={12} sm={12} md={4} id={"gridItem_" + nome}>
            <Card className={classes[cardAnimaton]} id={"card_" + nome}>
                <button onClick={() => handleDialogOpen("ax", "asx", "asd", "asd")}>
                    <div style={textStyle}>
                        {nome}
                    </div>
                </button>
                <Dialog id={"modal"}
                    open={isOpen}
                    style={{ backgroundColor: 'transparent' }}
                    onClose={handleDialogClose}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description"
                    fullWidth="sm"
                    maxWidth="sm"
                    overlayStyle={{ backgroundColor: 'transparent' }
                    }
                >
                    <DialogTitle
                        id={"modalTitle_" + nome}
                        className="modalHeader"
                    >
                        <h3> <b>{nome}</b> </h3>
                    </DialogTitle>
                    <DialogContent dividers
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                        {premiosRecebidos}
                        <p />
                    </DialogContent>
                </Dialog >
            </Card>
        </GridItem >
    )

}