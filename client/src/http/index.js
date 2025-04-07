// authAPI.js
import axios from 'axios';

export const API = axios.create({
  // eslint-disable-next-line no-undef
  baseURL:  process.env.VITE_BACKEND_URL,
  withCredentials: true, 
});

 