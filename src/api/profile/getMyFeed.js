import { accessInstance } from '../axios-api';

const getMyFeed = async (accountname) => {
  const response = await accessInstance.get(`/post/${accountname}/userpost`);

  return response.data;
};

export default getMyFeed;
