import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.79.225.4:8081',
});

export default instance;
