import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/appContext';
import { useDataApi } from '../../hooks';
import StyledForm from './styles';

const Search = () => {
  const { 
    setQueryData,
    setAppError,
    setAppLoading,
  } = useContext(AppContext)
  const [ userInput, setUserInput ] = useState('');
  const [ {
    data, 
    isLoading,
    isError
  }, doFetch] = useDataApi(`http://localhost:8080/api?query=`, { queryData: [] });

  const onUserInput = ({ target: { value }}) => setUserInput(value);

  const onSubmit = async (e) => {
    e.preventDefault();  
    doFetch(`http://localhost:8080/api?query=${userInput}`)    
  }

  useEffect(() => {
    if (isLoading) setAppLoading(true)
    else setAppLoading(false);
  }, [ isLoading ])

  useEffect(() => {
    if (isError) setAppError(true)
    else setAppError(false);
  }, [ isError ])

  useEffect(() => {
    if (!data) return;

    setQueryData(data.queryData);
  }, [ data ])
 
  return (    
    <StyledForm onSubmit={onSubmit}>
      <input type="text" placeholder="Search by Artist, Album or Playlist" onChange={onUserInput} />
      <button type="submit" disabled={!!isLoading || userInput.length < 1}>Search</button>
    </StyledForm>
  )
}

export default Search;