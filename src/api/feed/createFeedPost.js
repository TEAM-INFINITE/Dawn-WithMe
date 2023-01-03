import { accessInstance } from '../axios-api';

const createFeedPost = async (formData) => {
  const response = await accessInstance.post('/post', formData);

  return response.data;
};
export default createFeedPost;
