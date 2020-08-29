import React, { useContext } from 'react';
import { AppContext } from './context/appContext';

import Artist from './components/Artist';

import Player from './components/Player';
import { Wrapper } from './App.styles';

import TopSection from './containers/top';
import BottomSection from './containers/bottom';
import MiddleSection from './containers/middle';

import MediaCard from './components/Artist';

function App() {
  const { queryData: {
    data,
    error,
  } } = useContext(AppContext);
  
  return (
    <Wrapper>
      <TopSection />      
      <MiddleSection />        
      <BottomSection />
    </Wrapper>
  );
}

export default App;
