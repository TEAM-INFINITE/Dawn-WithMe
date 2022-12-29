import { accessInstance } from '../axios-api';

const getUserFeedData = async (accountname) => {
  const response = await accessInstance.get(`/post/${accountname}/userpost`);

  return response.data;
};

export default getUserFeedData;
