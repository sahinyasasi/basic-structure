import React from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "50px",
  },
  buttonStyles: {
    color: "green",
    border: 0,
  },
});

export default function () {
  const classes = useStyles();
  return (
    <div className='App'>
      <Typography className={classes.helloThereStyle} variant='h1'>
        Hello Der!
      </Typography>
      <Button
        className={classes.buttonStyles}
        color='secondary'
        variant='outlined'
      >
        This is our button
      </Button>
    </div>
  );
}
