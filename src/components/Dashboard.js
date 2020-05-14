import React from 'react';
import DashboardItem from './DashboardItem';

const Dashboard = ({ movies }) => {
  const elements = movies.map((item) => {
    return <DashboardItem key={item.id} label={item.label} favorite={item.favorite} />;
  });

  
  return <ul>{elements}</ul>;
};

export default Dashboard;
