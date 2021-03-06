import { Button, Collapse, Paper, TextField, Typography } from '@material-ui/core';
import { generateRandomNumber } from './NumberGeneratorLogic.js';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

// Styles
const useStyles = makeStyles((theme) => ({
  generateButton: {
    margin: '5px',
  },
  result: {
    padding: '10px',
    minHeight: '10pt',
  },
  resultTitle: {
    paddingTop: '5px',
    paddingLeft: '5px',
    minHeight: '10pt',
    fontWeight: 'bold',
  },
}));

// Component Function
function NumberGenerator() {
  // == State to keep track of ==
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [resultText, setResultText] = useState('');

  // retrieve the styles
  const classes = useStyles();

  // handling change of min or max
  const handleMinChange = (event) => {
    setResultText('');
    setMin(Number.parseFloat(event.target.value));
  };
  const handleMaxChange = (event) => {
    setResultText('');
    setMax(Number.parseFloat(event.target.value));
  };

  return (
    <>
      <div>
        <TextField name={'minVal'} type={'number'} defaultValue={0} label={'Min Value'} onChange={handleMinChange} />
        <TextField name={'maxVal'} type={'number'} defaultValue={0} label={'Max Value'} onChange={handleMaxChange} />
      </div>
      <Button 
        variant={'contained'} 
        color={'primary'} 
        className={classes.generateButton}
        disabled={min > max}
        onClick={(event) => {
          const randomlyGeneratedNumber = generateRandomNumber(min, max);
          if (randomlyGeneratedNumber) {
            setResultText(randomlyGeneratedNumber);
          }
        }}>Generate</Button>
      <Paper>
        <Collapse in={(resultText)?true:false}>
          <Typography className={classes.resultTitle}>Result</Typography>
          <Typography className={classes.result}>{resultText}</Typography>
        </Collapse>
      </Paper>
    </>
  );
};

export default NumberGenerator;
