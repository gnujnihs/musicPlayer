import React from 'react';
import Search from '../../components/Search';
import Wrapper, { HR } from './styles';

const TopContainer = ({ user = 'Default User' }) => (
  <Wrapper>
    <span>{user}'s Music Player</span>
    <Search />
    <HR />
  </Wrapper>
);

export default TopContainer;