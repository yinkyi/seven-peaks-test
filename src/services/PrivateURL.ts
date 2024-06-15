import axios from 'axios';

export const client = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const config = error.config;
      if (!config.set) {
        config.set = true;
        config.header.authorization = 'refreshToken';
        return axios(config);
      }
    }
    return Promise.reject(error);
  },
);
