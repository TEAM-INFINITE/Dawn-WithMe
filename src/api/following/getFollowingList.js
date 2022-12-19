import { accessInstance } from '../axios-api';

const getFollowingList = async (accountName) => {
  const response = await accessInstance.get(
    `/profile/${accountName}/following?limit=1000`,
  );

  return response.data;
};

export default getFollowingList;
