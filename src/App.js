import { makeStyles, Paper } from "@material-ui/core";
import NumberGenerator from "./components/NumberGenerator";

// Styles
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // margins/padding/etc
    margin: '15px',
    padding: '5px',

    // width/height
    minWidth: '20vw',
    maxWidth: '50vw',
  }
}));

// Component Function
function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <NumberGenerator />
    </Paper>
  );
}

export default App;
