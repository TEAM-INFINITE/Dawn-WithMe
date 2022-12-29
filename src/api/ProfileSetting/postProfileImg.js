import { imgInstance } from '../axios-api';

const postProfileImg = async (formData) => {
  const response = await imgInstance.post('/image/uploadfile', formData);
  return response.data;
};

export default postProfileImg;
