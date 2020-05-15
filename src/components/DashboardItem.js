import React from 'react';
import styled from 'styled-components';

const ItemLi = styled.div`
  display: flex;
  border: 1px solid #808080;
  margin-top: 5px;
  padding: 2px; 
  &:hover {
    color: red;
  }
`;

const DashboardItem = ({ title }) => {
  return <ItemLi>{title}</ItemLi>;
};

export default DashboardItem;
