import { accessInstance } from '../axios-api';

const getFollowFeedDeatail = async (id) => {
  const response = await accessInstance.get(`/post/${id}`);
  console.log(response.data);

  return response.data;
};

export default getFollowFeedDeatail;
