import axios from 'axios';

export const baseURL = 'http://54.180.189.0:8080';
// export const baseURL = process.env.REACT_APP_AXIOS_BASE_URL_;

const initAxios = () => {
  const defaultClient = axios.create({
    baseURL,
  });

  return defaultClient;
};

export default initAxios;
