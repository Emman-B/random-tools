import { Button, TextField } from '@material-ui/core';
import { generateRandomNumber } from './NumberGeneratorLogic.js';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

// Styles
const useStyles = makeStyles((theme) => ({
  generateButton: {
    margin: '5px',
  },
}));

// Component Function
function NumberGenerator() {
  // == State to keep track of ==
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  // retrieve the styles
  const classes = useStyles();

  // handling change of min or max
  const handleMinChange = (event) => {
    setMin(Number.parseFloat(event.target.value));
  };
  const handleMaxChange = (event) => {
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
          console.log(generateRandomNumber(min, max));
        }}>Generate</Button>
    </>
  );
};

export default NumberGenerator;
