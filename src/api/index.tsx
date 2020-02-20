import axios, { Method } from 'axios';

const request = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
});

export const makeRequest = (url: string, method: Method, data?: any) => {
  return request({
    method,
    url,
    data,
  });
};
