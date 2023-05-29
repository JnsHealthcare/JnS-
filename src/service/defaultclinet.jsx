import axios from 'axios';

export const baseURL = '';
// export const baseURL = process.env.REACT_APP_AXIOS_BASE_URL_;

export const nameSpace = '/';

const initAxios = () => {
  const defaultClient = axios.create({
    baseURL,
  });

  return defaultClient;
};

export default initAxios;
