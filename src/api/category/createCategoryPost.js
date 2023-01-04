import { accessInstance } from '../axios-api';

const createCategoryPost = async (formData) => {
  const response = await accessInstance.post('/product', formData);

  return response.data;
};
export default createCategoryPost;
