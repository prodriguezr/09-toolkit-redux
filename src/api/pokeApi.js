import axios from 'axios';

const baseURL = import.meta.env.VITE_POKEAPI_URL;

export const pokeApi = axios.create({
  baseURL,
});
