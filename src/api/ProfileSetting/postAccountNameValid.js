import { instance } from '../axios-api';

const postAccountNameValid = async (FormData) => {
  const response = await instance.post('/user/accountnamevalid', FormData);
  return response.data;
};

export default postAccountNameValid;
