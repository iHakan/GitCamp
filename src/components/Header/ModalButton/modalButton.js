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

export default function ModalButton() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Fab style={{ backgroundColor: "rgb(24,187,156)" }} aria-label="add">
        <NavigationIcon
          style={{ color: "white" }}
          className={classes.extendedIcon}
        />
      </Fab>
    </div>
  );
}
