import { instance } from '../axios-api';

const postProfileInfo = async (FormData) => {
  console.log(FormData);
  const response = await instance.post('/user', FormData);
  return response.data;
};

export default postProfileInfo;
