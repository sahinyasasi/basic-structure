import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CoButton from "./CoButton";
const useStyles = makeStyles({
  buttonStyles: {
    color: "red",
  },
});
export default function App() {
  const classes = useStyles();
  const cool = true;

  return (
    <>
      <Button className={classes.buttonStyles}>small button</Button>
      <br />
      <CoButton cool={cool} />
    </>
  );
}
/*import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};
export default App;*/
