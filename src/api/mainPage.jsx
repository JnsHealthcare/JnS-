import initAxios from './defaultClient';

const nameSpace = '/';

export const postMain = async (args) => {
  const axios = initAxios();
  try {
    axios.post(`${nameSpace}`, {
      //   id: args.id,
      imgUrl1: args.imgUrl1,
      imgUrl2: args.imgUrl2,
      imgUrl3: args.imgUrl3,
      imgUrl4: args.imgUrl4,
    });
  } catch (err) {
    if (err.response.status) alert(err.message);
    else alert('일시작인 장애입니다.');
  }
};
