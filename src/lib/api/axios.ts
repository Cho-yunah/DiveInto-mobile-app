import axios from 'axios';

export const baseURL = 'http://52.79.225.4:8081';

const instance = axios.create({
  baseURL,
});

export default instance;
