import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import Dashboard from './components/Dashboard';
import API from './utils/API';

const fetchFilms = async () => {
  let results;
  results = await API.get('films/');
  return results;
};

const App = () => {
  const [filmsArray, setFilms] = useState([]);
  useEffect(() => {
    const  data  = fetchFilms;
    setFilms(data);
  }, []);
  console.log(filmsArray);

  const moviesData = [
    { label: 'Batman', favorite: false, id: 1 },
    { label: 'The Empire Strikes Back', favorite: false, id: 2 },
    { label: 'Django', favorite: true, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <Dashboard movies={moviesData} />
      <SearchPanel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
