import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7004', // URL base da API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
