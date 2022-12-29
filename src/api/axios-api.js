import axios from 'axios';

export const url = 'https://mandarin.api.weniv.co.kr';

export const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const accessInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

accessInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  return config;
});
