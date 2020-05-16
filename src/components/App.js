import React, { useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import Dashboard from './Dashboard';
import API from '../utils/API';
import Wrapper from './Wrapper';
import { connect } from 'react-redux';

// const fetchFilms = async () => {
//   await API.get('films/')
//   .then(res => {
//     const movies = res.data
//   })

// };




const App = () => {
  let [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((resp) => resp.json())
      .then((data) => {
        let filmItem = data.results;
        filmItem.forEach((item) => (item.favorite = false));
        setFilms(filmItem);
        console.log('in func', filmItem);
      });
  }, []);
  
  

  return (
    <Wrapper>
      <AppHeader />
      <Dashboard movies={films} />
      <SearchPanel />
    </Wrapper>
  );
};

const mapStateToProps = (state)=> {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(App);
