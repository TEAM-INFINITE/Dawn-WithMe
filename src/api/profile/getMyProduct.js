import { accessInstance } from '../axios-api';

const getMyProduct = async (accountName) => {
  const response = await accessInstance.get(`/product/${accountName}`);

  return response.data;
};

export default getMyProduct;
