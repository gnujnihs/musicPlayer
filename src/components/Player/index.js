import React, { useState, useEffect } from 'react';

import ProgressBar from '../ProgressBar';

import useBoolToggler from '../../hooks/useBoolToggler';
import {
  StyledPlay,
  StyledRightIcon,
  StyledLeftIcon,
  StyledPause,
  PlayerControlsContainer,
  Wrapper
} from './styles';

const Player = () => {  
  const [ player, setPlayer ] = useState(null);
  const [ currentTime, setCurrentTime ] = useState(0);

  const {
    state: isPaused,
    onToggle: togglePlayPause,
  } = useBoolToggler(true);
  
  useEffect(() => {
    if (!player) return;
    
    if (isPaused) player.pause();
    else player.play();
    
  }, [ isPaused, player ])  

  return (   
    <Wrapper> 
      <PlayerControlsContainer>
        <StyledLeftIcon />
        {isPaused ? <StyledPlay onClick={togglePlayPause}/> : <StyledPause onClick={togglePlayPause}/> }        
        <StyledRightIcon />    
        <audio 
          title="testing"
          src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
          ref={node => setPlayer(node)}
          onTimeUpdate={(node) => {            
            setCurrentTime(player.currentTime)
          }}
        />
      </PlayerControlsContainer>
      <ProgressBar
        currentTime={currentTime}
        duration={player && player.duration}
      />
    </Wrapper> 
  )
}

export default Player;