import React, { useState, useEffect, useContext } from 'react';

import ProgressBar from '../ProgressBar';
import { AppContext } from '../../context/appContext';
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
  const { currentSong: {
    musicSrc = ''
  } } = useContext(AppContext);

  const {
    state: isPaused,
    onToggle: togglePlayPause,
  } = useBoolToggler(true);
  
  useEffect(() => {
    if (!player) return;
    
    if (isPaused) player.pause();
    else player.play();
    
  }, [ isPaused, player ])

  useEffect(() => {
    if (!player) return;
    player.pause();
    player.play();
    togglePlayPause();
  }, [ musicSrc ])

  return (   
    <Wrapper> 
      <PlayerControlsContainer>
        <StyledLeftIcon />
        {isPaused ? <StyledPlay onClick={togglePlayPause}/> : <StyledPause onClick={togglePlayPause}/> }        
        <StyledRightIcon />    
        <audio
          src={musicSrc}
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