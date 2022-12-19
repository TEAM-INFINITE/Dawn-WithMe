import { accessInstance } from '../axios-api';

const getFollowingProduct = async (accountNameList) => {
  const result = [];
  const promises = accountNameList.map(async (username) => {
    const response = await accessInstance.get(`/product/${username}`);
    if (response.data.data) {
      response.data.product.forEach((el) => result.push(el));
    }
  });
  await Promise.all(promises);

  return result;
};

export default getFollowingProduct;
