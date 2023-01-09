import { accessInstance } from '../axios-api';

const getFollowingProduct = async (accountNameList) => {
  const accountName = localStorage.getItem('accountname');
  let result = [];

  accountNameList.push(accountName);

  const promises = accountNameList.map(async (username) => {
    const response = await accessInstance.get(`/product/${username}`);
    if (response.data.data) {
      response.data.product.forEach((el) => result.push(el));
    } else if (response.data.status === 404) {
      result = { status: 404 };
    }
  });
  await Promise.all(promises);

  return result;
};

export default getFollowingProduct;
