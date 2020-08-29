import React, { useContext } from 'react';
import MediaCard from '../../components/MediaCard';

import { Wrapper } from './styles';

import { AppContext } from '../../context/appContext';

const MiddleContainer = () => {
  const { queryData, appLoading, appError } = useContext(AppContext);
  return (
    <Wrapper>
      {appLoading && <div>...Loading</div>}
      {appError && <div>Sorry we have encountered an error. Please try again.</div>}
      {queryData && queryData.map((data, i) => {
        return (
          <MediaCard data={data} key={`${data.queryData}_${i}`} />
        )
      })}      
    </Wrapper>
  )    
}

export default MiddleContainer;