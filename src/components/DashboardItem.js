import React from 'react';
import styled from 'styled-components';

const ItemLi = styled.li`
  display: flex,
  color: palevioletred;

  &:hover {
    color: red;
  }
`;

const DashboardItem = ({ title }) => {
  return <ItemLi>{title}</ItemLi>;
};

export default DashboardItem;
