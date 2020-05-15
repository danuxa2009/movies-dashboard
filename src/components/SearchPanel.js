import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  margin-top: 15px;
  width: 250px;
  height:15px;
`;

const SearchPanel = () => {
  return <SearchInput placeholder='search' />;
};

export default SearchPanel;
