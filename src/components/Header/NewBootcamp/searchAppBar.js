import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import FormNBC from "../Modal/modal";
import Link from "@material-ui/core/Link";
import style from "./style.module.css";
import { Backpack } from "react-kawaii";
import Cat from "react-kawaii/lib/es/components/cat/Cat";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: 25,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          opacity: "0.99",
          backgroundColor: "#4f4e4e",
          borderColor: "#4f4e4e"
        }}
      >
        <Toolbar>
          <Cat size={60} mood="blissful" color="#8f919b" />
          <Typography
            style={{ paddingLeft: 10, textAlign: "left", marginRight: "0" }}
            className={classes.title}
            variant="h4"
            noWrap
          >
            <a className={style.gitCamp} href="#">
              Git<span className={style.gitCampSpan}>Camp!</span>
            </a>
          </Typography>
          <div className="menu-links">
            <ul>
              <li>
                <a href="#upComings">Up Comings</a>
              </li>
              <li>
                <a href="#Category">Categories</a>
              </li>
              <li>
                <a href="#whatIsBootcamp">What is Bootcamp?</a>
              </li>
              <li>
                <a href="#map-location">Location</a>
              </li>
              <li>
                <a href="#footer-contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={style.searchSection}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div className={style.FormNBC}>
            <FormNBC />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}
