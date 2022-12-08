import axios from 'axios';

const url = 'https://mandarin.api.weniv.co.kr';

export const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'multipart/form-data' },
});
