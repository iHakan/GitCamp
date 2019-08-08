import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import image from '../Categories/ios.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root: {
        flexGrow: 1,
        width: "80%",
        margin: "0 auto"
      },
      paper: {
        height: 440,
        width: 240,
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.secondary,
        borderRadius:'',
        boxShadow: '50%',

      },
  
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      firstItem: {
        marginTop: '100px',
          marginLeft: "60px",
      },
      secondItem: {
          marginTop: '50px',
        marginLeft: '60px',
    },
    thirtyItem: {
        marginTop: '50px',
      
  },
  fourthItem :{
    marginTop: '100px',
  }
  }),
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={2} justify="center">
        <Grid item xs className={classes.secondItem}>
          <Paper className={classes.paper}>
               <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
            </Paper>
        </Grid>
        <Grid item xs className={classes.thirtyItem}>
          <Paper className={classes.paper}> 
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require("./android.png")} />
            </ButtonBase>
            </Paper>
        </Grid>
        <Grid item xs className={classes.thirtyItem}>
          <Paper className={classes.paper}> <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase></Paper>
        </Grid>
      </Grid>
        <Grid container spacing={2} >
        <Grid item xs  className={classes.firstItem}>
          <Paper className={classes.paper}> <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase></Paper>
        </Grid>
        <Grid item xs className={classes.fourthItem}>
          <Paper className={classes.paper}> <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase></Paper>
        </Grid>
        <Grid item xs className= {classes.fourthItem}>
          <Paper className={classes.paper}> <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase></Paper>
        </Grid>
      </Grid>
    </div>
  );
}