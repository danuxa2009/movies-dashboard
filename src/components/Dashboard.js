import React from 'react';
import DashboardItem from './DashboardItem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleFlagToFavorite } from '../store/actions/actions';

const UlStyle = styled.div`
  list-style-type: none;
  cursor: pointer;
`;

const Dashboard = ({ films, toggleFlag }) => {
  return (
    <UlStyle>
      {films.map((item) => (
        <DashboardItem onClickHandler = {toggleFlag} favorite={item.favorite} key={item.episode_id} id={item.episode_id} title={item.title} />
      ))}
    </UlStyle>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFlag: (id) => dispatch(toggleFlagToFavorite(id)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
