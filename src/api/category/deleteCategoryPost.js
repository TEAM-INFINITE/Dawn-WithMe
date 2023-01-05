import { accessInstance } from '../axios-api';

const deleteCategoryPost = async ({ productId }) => {
  const response = await accessInstance.delete(`/product/${productId}`);
  console.log(response);
  return response.data;
};

export default deleteCategoryPost;
