import { makeStyles, Paper } from "@material-ui/core";
import NumberGenerator from "./components/NumberGenerator";
import ListRandomizer from "./components/ListRandomizer";
import './App.css';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    // margins/padding/etc
    margin: '15px',
    padding: '5px',

    // width/height
    minWidth: '20vw',
    // maxWidth: '50vw',
  }
}));

// Component Function
function App() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <NumberGenerator />
      </Paper>
      <Paper className={classes.root}>
        <ListRandomizer />
      </Paper>
    </>
  );
}

export default App;
