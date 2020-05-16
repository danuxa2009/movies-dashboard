import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  margin-top: 15px;
  width: 250px;
  height:15px;
`;

const search = (event) => {
  console.log(event.target.value);
  
}

const SearchPanel = () => {
  return <SearchInput onChange= {search} placeholder='search' />;
};

export default SearchPanel;
