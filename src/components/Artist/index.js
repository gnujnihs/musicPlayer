import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { PlayButton, Wrapper } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',   
    color: 'white', 
  },
  content: {
    flex: '1 0 auto',    
  },
  cover: {
    width: 75,    
  },
}));

const MediaCard = () => {
  const classes = useStyles();  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="white">
            Mac Miller
          </Typography>
        </CardContent>        
      </div>
      <CardMedia
        className={classes.cover}
        image="https://i.ytimg.com/vi/AIQLBiGUCQ4/maxresdefault.jpg"
        title="Live from space album cover"
      />
      <Wrapper>
        <PlayButton />
      </Wrapper>
    </Card>
  );
}

export default MediaCard;