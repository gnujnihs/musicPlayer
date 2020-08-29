import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '45%',
  },
});

const ProgressBar = ({ currentTime, duration }) => {
  const classes = useStyles();
  const [ progress, setProgress ] = useState(0);

  useEffect(() => {       
    setProgress((oldProgress) => {
      if (oldProgress === 100) return 0;
      return currentTime / duration * 100;
    });
  }, [ currentTime, duration ])

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
};

export default ProgressBar;