import React, { useEffect, useState} from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import Dashboard from './Dashboard';
import Wrapper from './Wrapper';
import { connect } from 'react-redux';
import { getFilmsAsync } from '../store/actions/actions';

const App = (props) => {
  let [films, setFilms] = useState([]);
 
  
  useEffect(()=> {
    // props.getFilmsAsync()
    setFilms(props.films)
    
  },[props.films])

  
  return (
    <Wrapper>
      <AppHeader />
      <Dashboard films={films} />
      <SearchPanel />
      <button onClick = {()=> props.getFilmsAsync()}>FETCH</button>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  films: state.films
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmsAsync: () => dispatch(getFilmsAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
