import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/appContext';
import useDataApi from '../../hooks/useDataApi';
import StyledForm from './styles';

const GET_DATA_LINK = (query) => `http://localhost:8080/api?query=${query}`

const Search = () => {
  const [ userInput, setUserInput ] = useState('');
  const { setQueryData, setQueryError } = useContext(AppContext);
  const onUserInput = ({ target: { value }}) => setUserInput(value);

  const { 
    error,
    data,
    isLoading,
    doFetch,
  } = useDataApi('');

  useEffect(() => {
    if (data) {
      setQueryData(data);
      console.log('this is data', data);
    }
  }, [ data ]);

  useEffect(() => {
    if (error) {
      setQueryError(error);
      console.log(error);
    }
  }, [ error ]);

  const onSubmit = (e) => {   
    e.preventDefault();
    doFetch(GET_DATA_LINK(userInput))
  }
 
  return (
    <StyledForm onSubmit={onSubmit}>
      <input type="text" placeholder="Search by Artist, Album or Playlist" onChange={onUserInput} />
      <button type="submit" disabled={!isLoading || userInput.length < 1}>Search</button>
    </StyledForm>
  )
}

export default Search;