import axios from "axios";

const BASE_URL = "https://api.openweathermap.org";

export const getWeatherByDate = (date) => {
  return axios.get(`${BASE_URL}/date/${date}`);
};

export const getWeatherByMonth = (month) => {
  return axios.get(`${BASE_URL}/month/${month}`);
};

export const getTemperatureStats = (year) => {
  return axios.get(`${BASE_URL}/stats/${year}`);
};