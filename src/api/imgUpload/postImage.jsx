import { imgInstance } from '../axios-api';

const postImage = async (imgData) => {
  const response = await imgInstance.post('/image/uploadfile', imgData);

  return response.data;
};
export default postImage;
