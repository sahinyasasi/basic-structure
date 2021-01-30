import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  /*buttonStyles: {
    color: (props) => (props.cool ? "blue" : "red"),
  },*/
  /*buttonStyles: (props) => {
    return {
      color: props.cool ? "blue" : "orange",
      backgroundColor: props.cool ? "orange" : "blue",
    };
  },*/
  /*buttonStyles: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "green",
    },
  },*/
}));
export default function Hook(props) {
  const classes = useStyles(props);
  return (
    <Button fullWidth className={classes.buttonStyles}>
      cool button
    </Button>
  );
}
