import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "./styles.module.css";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "80%",
      margin: "auto",
      paddingTop: 50,
      paddingBottom: 150
    },
    paper: {
      height: 440,
      width: 240,
      padding: theme.spacing(5),
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: 20
    },

    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    firstItem: {
      marginTop: "100px",
      marginLeft: "60px"
    },
    secondItem: {
      marginTop: "50px",
      marginLeft: "60px"
    },
    thirtyItem: {
      marginTop: "50px"
    },
    fourthItem: {
      marginTop: "100px"
    }
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        style={{
          paddingTop: 100,
          paddingBottom: 50,
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(179, 179, 179)"
        }}
        variant="h3"
      >
        Up Coming Bootcamps
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs className={classes.secondItem}>
          <Paper className={classes.paper}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={require("./images/laptop.png")}
              />
            </ButtonBase>
            <div>
              <h1>Front-End Development</h1>
              <p>
                Front-End development, is generally based on HTML/CSS and
                JavaScript program languages.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.thirtyItem}>
          <Paper className={classes.paper}>
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/js.png")}
              />
            </ButtonBase>
            <div>
              <h1>JavaScript</h1>
              <p>
                JavaScript is a client scripting language which is used for
                creating web pages/apps and mobile apps.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.thirtyItem}>
          <Paper className={classes.paper}>
            {""}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 120 }}
                className={classes.img}
                alt="complex"
                src={require("./images/react.svg")}
              />
            </ButtonBase>
            <div>
              <h1>ReactJS</h1>
              <p>
                ReactJS, is basically the library that consists of some very
                useful and time-savier templates for JavaScript.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs className={classes.firstItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={require("./images/android.png")}
              />
            </ButtonBase>
            <div>
              <h1>Android</h1>
              <p>
                Android is a Linux based operating system it is designed
                primarily for touch screen mobile devices such as smart phones
                and tablet computers...
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 100 }}
                className={classes.img}
                alt="complex"
                src={require("./images/swift.png")}
              />
            </ButtonBase>
            <div>
              <h1>Swift</h1>
              <p>
                Swift is a powerful and intuitive programming language for
                macOS, iOS, watchOS, tvOS and beyond.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 100 }}
                className={classes.img}
                alt="complex"
                src={require("./images/python.png")}
              />
            </ButtonBase>
            <div>
              <h1>Python</h1>
              <p>
                Python is an interpreted, object-oriented, high-level
                programming language with dynamic semantics.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
