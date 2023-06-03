import initAxios from './defaultclinet';

export const nameSpace = '/';

export const prefix = '/me';

export const getLogin = async () => {
  const axios = initAxios();
  return await axios.post(`${nameSpace}`);
};
//로그인 유저
export const patchMyInfoFormData = async (args) => {
  const axios = initAxios();
  return await axios.post(`${nameSpace}${prefix}/`, args, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
