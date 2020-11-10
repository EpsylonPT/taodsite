import React from "react";
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";

import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import Card from "components/Card/Card.js";

const SpotifyButton = withStyles({
    root: {
        background: "#1DB954",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 35,
        marginLeft: 10,
        marginBottom: 2,
        marginRight: 10,

    },
})(Button);


const textStyle = {
    textAlign: "center"
};

const useStyles = makeStyles(styles);

export default function MusicaCard(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    const handleDialogOpen = () => {
        setIsOpen(true)
    }
    const handleDialogClose = () => {
        setIsOpen(false)
    }

    const { musica, ...rest } = props;

    const classes = useStyles();

    const nome = musica.nome;

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    const letra = musica.letra.map(function (linha, index) {
        if (linha.includes("Refrão")) {
            return (
                <p key={index} style={textStyle}>
                    <b>{linha}</b>
                </p>
            )
        } else {
            return (
                <p key={index} style={textStyle}>
                    {linha}
                </p>
            )
        }
    })
    const creditos = musica.creditos.map(function (linha, index) {
        return (
            <p key={index} style={textStyle}>
                <b>{linha}</b>
            </p>
        )
    })

    var spotifyHeader = (<i/>)
    var spotifyButton = (<i/>)
    const spotify_link = musica.spotify;
    if (spotify_link != "") {
        spotifyHeader = (
            <i className={classes.socialIcons + " fab fa-spotify"} />
        )
        spotifyButton = (
            <SpotifyButton
                href={spotify_link}
                endIcon={<i className={classes.socialIcons + " fab fa-spotify"} />}
            >
                Spotify
            </SpotifyButton>
        )
    }
    return (
        <GridItem xs={12} sm={12} md={4} id={"gridItem_" + nome}>
            <Card className={classes[cardAnimaton]} id={"card_" + nome}>
                <button onClick={() => handleDialogOpen("ax", "asx", "asd", "asd")}>
                    <div style={textStyle}>
                        {nome} {spotifyHeader}
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
                    {spotifyButton}
                    <DialogContent dividers
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                        {letra}
                        <p />
                        {creditos}
                    </DialogContent>
                </Dialog >
            </Card>
        </GridItem >
    )

}