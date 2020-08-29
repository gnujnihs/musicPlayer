import React from 'react';

import { Wrapper } from './App.styles';

import TopSection from './containers/top';
import BottomSection from './containers/bottom';
import MiddleSection from './containers/middle';

function App() {
  return (
    <Wrapper>
      <TopSection />      
      <MiddleSection />        
      <BottomSection />
    </Wrapper>
  );
}

export default App;
