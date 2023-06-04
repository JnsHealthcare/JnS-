import initAxios from './defaultclinet';

const nameSpace = '/main';

export const postMain = async (args) => {
  const axios = initAxios();
  try {
    axios.get(`${nameSpace}`, {
      //   id: args.id,
      imgUrl3: args.imgUrl3,
      imgUrl4: args.imgUrl4,
    });
  } catch (err) {
    if (err.response.status) alert(err.message);
    else alert('일시작인 장애입니다.');
  }
};
