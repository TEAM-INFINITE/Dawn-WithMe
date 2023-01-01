import { accessInstance } from '../axios-api';

const getSearchUser = async (keyword) => {
  const response = await accessInstance.get(
    `/user/searchuser/?keyword=${keyword}`,
  );

  return response.data;
};

export default getSearchUser;
