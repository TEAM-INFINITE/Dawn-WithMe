import { instance } from '../axios-api';

const postProfileInfo = async (formData) => {
  console.log(formData);
  const response = await instance.post('/user', formData);
  return response.data;
};

export default postProfileInfo;
