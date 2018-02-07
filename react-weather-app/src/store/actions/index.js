import axios from 'axios';
import * as types from '../types';

const URL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?appid=${
  process.env.REACT_APP_WEATHER_KEY
}`;

export const fetchWeather = (city) => {
  const query = `${URL}&q=${city},us`;
  const req = axios.get(query);
  console.log('req', req);
  return {
    type: types.FETCH_WEATHER,
    payload: req
  };
};
