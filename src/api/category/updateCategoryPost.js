import { accessInstance } from '../axios-api';

const updateCategoryPost = async ({ id, product }) => {
  const response = await accessInstance.put(`/product/${id}`, {
    product: { ...product },
  });

  return response.data;
};
export default updateCategoryPost;
