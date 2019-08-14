import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  div: {
    display: "flex",
    justifyContent: "center"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    display: "flex",
    justifyContent: "center",
    marginRight: theme.spacing(0)
  }
}));

export default function ModalButton(props) {
  const classes = useStyles();

  return (
    <button //the div here has been changed with button to activate the "onClick function"
      className={classes.div}
      onClick={props.onClick} // this is to activate the click button !
      style={{ background: "none", border: "none" }} //this is to style the click button background
    >
      <Fab style={{ backgroundColor: "rgb(24,187,156)" }} aria-label="add">
        <NavigationIcon
          style={{ color: "white" }}
          className={classes.extendedIcon}
        />
      </Fab>
    </button>
  );
}
