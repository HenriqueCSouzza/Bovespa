import axios from 'axios';

const api = axios.create({
  baseURL: `https://bovespa.nihey.org/`,
});

export default api;
