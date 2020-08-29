import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Track = ({ trackData }) => {  
  const { setNextSong } = useContext(AppContext);
  const { title } = trackData;
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={setNextSong(trackData)}>Play Song</button>
    </div>
  )
}

export default Track;