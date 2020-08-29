import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { PlayButton, Wrapper } from './styles';

import { AppContext } from '../../context/appContext';

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

const MediaCard = ({ data = {} }) => {
  const classes = useStyles();  
  const {
    title = 'Default Title',
    name = 'Default Name',
    imgSrc = '',    
  } = data;

  const { setCurrentSong } = useContext(AppContext);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {name}
          </Typography>
        </CardContent>        
      </div>
      <CardMedia
        className={classes.cover}
        // image="https://i.ytimg.com/vi/AIQLBiGUCQ4/maxresdefault.jpg"
        image={imgSrc}
        title={title}
      />
      <Wrapper>
        <PlayButton onClick={() => setCurrentSong(data)}/>
      </Wrapper>
    </Card>
  );
}

export default MediaCard;