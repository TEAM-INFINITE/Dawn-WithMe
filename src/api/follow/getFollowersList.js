import { accessInstance } from '../axios-api';

const getFollowersList = async (accountName) => {
  const response = await accessInstance.get(`/profile/${accountName}/follower`);

  return response.data;
};
export default getFollowersList;
