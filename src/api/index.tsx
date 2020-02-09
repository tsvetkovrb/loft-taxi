import axios from 'axios';
export const request = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
});
