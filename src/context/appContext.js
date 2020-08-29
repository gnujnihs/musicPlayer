import React, { useState } from 'react';

import defaultContext from './defaultContext';

export const AppContext = React.createContext({
  ...defaultContext,
});

export const AppContextProvider = ({ children }) => {
  const [ state, setState ] = useState({
    ...defaultContext,
  });

  const setQueryData = data => setState(prevState => ({ ...prevState, queryData: data }));

  const setAppError = bool => setState(prevState => ({ ...prevState, appError: bool }))
  const setAppLoading = bool => setState(prevState => ({ ...prevState, appLoading: bool }))

  const setCurrentSong = data => setState(prevState => ({ ...prevState, currentSong: data }))
  
  return (
    <AppContext.Provider value={{
      ...state,
      setAppError,
      setQueryData,
      setAppLoading,
      setCurrentSong
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

