import {
  SAVE_FILMS_TO_STORE,
  TOGGLE_FLAG_TO_FAVORITE,
  GET_FILMS_ASYNC,
} from '../constants/constans';

const initialState = {
  films: [],
};



const findFilmAndToggleFlag = (id, films) => {
  const filmItem = films.filter((item) => item.episode_id === id);
  // const a = films.concat(filmItem.filter(item => films.indexOf(item.episode_id) === id ))
 
 
  
  return { ...filmItem[0], favorite: !filmItem[0].favorite };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FLAG_TO_FAVORITE:
      return {
        ...state,
        films: [
          
          findFilmAndToggleFlag(action.payload, state.films),
        ],
      };
    case SAVE_FILMS_TO_STORE:
      return {
        ...state,
        films: action.payload,
      };
    case GET_FILMS_ASYNC:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
