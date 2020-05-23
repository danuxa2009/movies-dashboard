import {
  SAVE_FILMS_TO_STORE,
  TOGGLE_FLAG_TO_FAVORITE,
  GET_FILMS_ASYNC,
} from '../constants/constans';

import API from '../../utils/API';



export const saveFilmsToStore = (payload) => ({
  type: SAVE_FILMS_TO_STORE,
  payload,
});

export const toggleFlagToFavorite = (payload) => ({
  type: TOGGLE_FLAG_TO_FAVORITE,
  payload,
});

export const getFilmsAsync = () => async (dispatch) => {
  dispatch({
    type: GET_FILMS_ASYNC,
    payload: (await API.get('films/')).data.results
  });
 
};


