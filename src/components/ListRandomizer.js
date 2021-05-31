import { Button, Collapse, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { processInput } from './ListRandomizerLogic';

// Styles
const useStyles = makeStyles((theme) => ({
  randomizeButton: {
    margin: '5px',
  },
  resultTitle: {
    paddingTop: '5px',
    paddingLeft: '5px',
    minHeight: '10pt',
    fontWeight: 'bold',
  },
  result: {
    padding: '5px',
    minHeight: '10pt',
    whiteSpace: 'pre-wrap',
  },
  input: {
    minWidth: '85vw',
  },
}));

// Component Function
function ListRandomizer() {
  // == State to keep track of ==
  const [input, setInput] = useState('');
  const [resultText, setResultText] = useState('');

  // retrieve the styles
  const classes = useStyles();

  // handle when the randomize button is clicked
  const handleRandomizeButton = (event) => {
    setResultText(processInput(input));
  };

  return (
    <>
      <TextField multiline className={classes.input} label={'Items (on separate lines)'} onChange={(event) => {
        setInput(event.target.value);
        // if the new input is also smaller (NOT LARGER) than what it is before, reset the result
        if (event.target.value.length < input.length) {
          setResultText('');
        }
      }} />
      <div>
        <Button variant={'contained'} color={'primary'} className={classes.randomizeButton} onClick={handleRandomizeButton}>Randomize</Button>
      </div>
      <Collapse in={(resultText)?true:false}>
        <Paper elevation={10}>
          <Typography className={classes.resultTitle}>Result</Typography>
          <Typography className={classes.result}>
            {resultText}
          </Typography>
        </Paper>
      </Collapse>
    </>
  );
};

export default ListRandomizer;
