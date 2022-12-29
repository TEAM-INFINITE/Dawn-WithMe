import { accessInstance } from '../axios-api';

const getUserProduct = async (accountName) => {
  const response = await accessInstance.get(`/product/${accountName}`);

  return response.data;
};

export default getUserProduct;
