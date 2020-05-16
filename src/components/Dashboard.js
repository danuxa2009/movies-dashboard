import React from 'react';
import DashboardItem from './DashboardItem';
import styled from 'styled-components';
import { connect } from 'react-redux';

const UlStyle = styled.div`
  list-style-type: none;
  cursor: pointer;
`;

const Dashboard = ({ movies }) => {
  const elements = movies.map((item) => {
    return <DashboardItem favorite={item.favorite} key={item.episode_id} title={item.title} />;
  });

  return <UlStyle>{elements}</UlStyle>;
};

const mapStateToProps = (state)=> {
  return {

  }
}

export default connect(mapStateToProps)(Dashboard) ;
