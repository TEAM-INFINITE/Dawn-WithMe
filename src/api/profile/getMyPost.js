import { accessInstance } from '../axios-api';

const getMyPost = async (accountName) => {
  const response = await accessInstance.get(`/post/${accountName}/userpost`);

  return response.data;
};

export default getMyPost;
