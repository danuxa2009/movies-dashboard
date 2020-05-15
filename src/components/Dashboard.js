import React from 'react';
import DashboardItem from './DashboardItem';
import styled from 'styled-components';

const UlStyle = styled.ul`
  list-style-type: none;
`;

const Dashboard = ({ movies }) => {
  const elements = movies.map((item) => {
    return <DashboardItem key={item.episode_id} title={item.title} />;
  });

  return <UlStyle>{elements}</UlStyle>;
};

export default Dashboard;
