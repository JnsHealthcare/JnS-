import initAxios from './defaultclinet';

export const nameSpace = '/';

export const prefix = '/auth';

export const signIn = async (args) => {
  const axios = initAxios();
  return await axios.post(`${nameSpace}${prefix}/login`, {
    userLogin: args.userLogin,
    userPw: args.userPw,
  });
};

export const patchMyInfoFormData = async (args) => {
  const axios = initAxios();
  return await axios.post(`${nameSpace}${prefix}/`, args, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const signUp = async (args) => {
  const axios = initAxios();
  return await axios.post(`${nameSpace}${prefix}/signin`, args, {
    name: args.name,
    birthdate: args.birthdate,
    email: args.email,
    password: args.password,
    phoneNumber: args.phoneNumber,
  });
};
