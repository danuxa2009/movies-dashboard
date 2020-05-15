import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import Dashboard from './Dashboard';
import API from '../utils/API';

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
        setFilms(data.results);
      });
  }, []);

  const moviesData = films;

  return (
    <div>
      <AppHeader />
      <Dashboard movies={moviesData} />
      <SearchPanel />
    </div>
  );
};

export default App;