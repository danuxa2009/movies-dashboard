import axios from 'axios';

// axios.get('https://swapi.dev/api/films/')
// .then((response) => console.log('resp', response.data));

export default axios.create({
  baseURL: 'https://swapi.dev/api/',
  responseType: 'json',
});

// export default API