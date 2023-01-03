import { imgInstance } from '../axios-api';

const postImages = async (imgData) => {
  const response = await imgInstance.post('/image/uploadfiles', imgData);

  return response.data;
};
export default postImages;
