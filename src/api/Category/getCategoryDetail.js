import { accessInstance } from '../axios-api';

const getCategoryDetail = async (id) => {
  const response = await accessInstance.get(`/product/detail/${id}`);

  return response.data;
};

export default getCategoryDetail;
