import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const ItemFilm = styled.div`
  display: flex;
  border: 1px solid #808080;
  margin-top: 5px;
  padding: 2px;
  width: 170px;
  &:hover {
    color: red;
  }
`;

const WrapperFilms = styled.div`
  display: flex;
  align-items: flex-end;
`;

const FavoriteIcon = styled(FontAwesomeIcon)`
  display: flex;
  width: 20px;
  height: 22px;
  margin: 3px;
`;

const DashboardItem = ({ title, favorite, id, onClickHandler }) => {
  return (
    <WrapperFilms>
      <FavoriteIcon
        onClick={() => {
          onClickHandler(id);
        }}
        icon={favorite ? faHeart : faHeartRegular}
        color='palevioletred'
      />

      <ItemFilm>{title}</ItemFilm>
    </WrapperFilms>
  );
};

export default DashboardItem;
