import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

import {
  FETCHING,
  FETCHED,
  ERROR
} from './actions';
import dataFetchReducer from './reducer';

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
 
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
 
  useEffect(() => {
    let didCancel = false;
 
    const fetchData = async () => {
      dispatch({ type: FETCHING });
 
      try {
        const result = await axios(url);
 
        if (!didCancel) {
          dispatch({ type: FETCHED, payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ERROR });
        }
      }
    };
 
    fetchData();
 
    return () => {
      didCancel = true;
    };
  }, [url]);
 
  return [state, setUrl];
};

export default useDataApi