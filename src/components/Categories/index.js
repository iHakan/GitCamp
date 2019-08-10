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
        id="Category"
        style={{
          paddingTop: 100,
          paddingBottom: 25,
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(179, 179, 179)"
        }}
        variant="h3"
      >
        Categories
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
              <h1 className="header-categories">Front-End Development</h1>
              <span className="text-categories">
                Front-End development, is generally based on HTML/CSS and
                JavaScript program languages.
              </span>
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
                src={require("./images/cloudi.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Back-End Development</h1>
              <span className="text-categories">
                A back-end developer is a type of programmer who creates the
                logical back-end and core computational logic of a website,
                software or information system.
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.thirtyItem}>
          <Paper className={classes.paper}>
            {""}
            <ButtonBase className={classes.image}>
              <img
                style={{ paddingTop: 10, width: 120 }}
                className={classes.img}
                alt="complex"
                src={require("./images/browser.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Full-Stack Development </h1>
              <span className="text-categories">
                Full Stack development, consists of both "Front-End Development"
                and "Back-End Development".
              </span>
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
                style={{ width: 142 }}
                className={classes.img}
                alt="complex"
                src={require("./images/android-os.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Android</h1>
              <span className="text-categories">
                Android is a Linux based operating system it is designed
                primarily for touch screen mobile devices such as smart phones
                and tablet computers...
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ paddingTop: 14, width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/swift.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Swift</h1>
              <span className="text-categories">
                Swift is a powerful and intuitive programming language for
                macOS, iOS, watchOS, tvOS and beyond.
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/robot.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Robotic</h1>
              <span className="text-categories">
                Robot software is the set of coded commands or instructions that
                tell a mechanical device and electronic system, known together
                as a robot, what tasks to perform.
              </span>
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
                style={{ width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/python.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">Python</h1>
              <span className="text-categories">
                Python is an interpreted, object-oriented, high-level
                programming language with dynamic semantics.
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/js.png")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">JavaScript</h1>
              <span className="text-categories">
                JavaScript is a client scripting language which is used for
                creating web pages/apps and mobile apps.
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}>
            {" "}
            <ButtonBase className={classes.image}>
              <img
                style={{ width: 128 }}
                className={classes.img}
                alt="complex"
                src={require("./images/react.svg")}
              />
            </ButtonBase>
            <div>
              <h1 className="header-categories">ReactJS</h1>
              <span className="text-categories">
                ReactJS, is basically the library that consists of some very
                useful and time-savier templates for JavaScript.
              </span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
