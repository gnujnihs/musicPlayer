import { useState, useEffect, useCallback } from 'react';

const useDataApi = (initialUrl = '', opts) => {
  const [ url, setUrl ] = useState(initialUrl);
  const [ data, setData ] = useState('')
  const [ isLoading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    let didCancel = false;
    setLoading(true);
    
    (async () => {
      try {
        fetch(url, opts)
          .then((res) => res.json())
          .then(json => {
            setData(json)
            setLoading(false)
          })                 
      } catch {
        setError(true)
        setLoading(false)
      }
    })();

    return () => {
      didCancel = true;
    }
      
  }, [ url ])

  const doFetch = useCallback((fetchUrl) => {
    setUrl(fetchUrl)
  }, []);

  return {
    data,
    isLoading,
    error,
    doFetch,
  } 
}

export default useDataApi;