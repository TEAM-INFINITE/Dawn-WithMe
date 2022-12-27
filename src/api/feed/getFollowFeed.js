import { accessInstance } from '../axios-api';

const getFollowFeed = async () => {
  const response = await accessInstance.get(`/post/feed/?limit=1000`);
  console.log(response.data);

  return response.data;
};

export default getFollowFeed;
