import React, { useState } from 'react';

import defaultContext from './defaultContext';

export const AppContext = React.createContext({
  ...defaultContext,
});

export const AppContextProvider = ({ children }) => {
  const [ state, setState ] = useState({
    ...defaultContext,
  });
  
  const setUserQuery = (query) => {
    setState(prevState => {
      return {
        ...prevState,
        userQuery: query,
      }
    })
  }

  const setQueryData = (data) => {
    setState(prevState => {
      return {
        ...prevState,
        queryData: {
          data,
        }
      }
    })
  }

  const setQueryError = (error) => {
    setState(prevState => {
      return {
        ...prevState,
        queryData: {
          ...prevState.queryData,
          error,
        }
      }
    })
  }

  const setNextSong = (src) => {
    setState(prevState => {
      return {
        ...prevState,
        playerData: {
          ...prevState.playerData,
          src,
        }
      }
    })
  }

  const setTogglePlayPause = () => {
    setState(prevState => {
      return {
        ...prevState,
        playerData: {
          ...prevState.playerData,
          isPlaying: !prevState.isPlaying,
        }
      }
    })
  }
  return (
    <AppContext.Provider value={{
      ...state,
      setUserQuery,
      setQueryData,
      setQueryError,
      setNextSong,
      setTogglePlayPause,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

