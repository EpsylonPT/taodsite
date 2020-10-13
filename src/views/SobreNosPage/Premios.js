import React from "react";
// @material-ui/core components
import { withStyles, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

// core components
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import "./PremiosButton.css"

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function AcercaPage(props) {
    const [modal, setModal] = React.useState(false);
    const classes = useStyles();
    const { ...rest } = props;
    return (
       <div>
           <div>
        <Button type="button" color="github" onClick={() => setModal(true)}>
                Premios
        </Button>
        </div>
       </div> 
    )
}