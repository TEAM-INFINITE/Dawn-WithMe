import { accessInstance } from '../axios-api';

const getFollowFeed = async (pageParam) => {
  const response = await accessInstance.get(
    `/post/feed/?limit=10&skip=${pageParam}`,
  );
  const { posts } = response.data;

  return {
    data: posts,
    nextPage: pageParam,
    isLast: posts.length % 10 !== 0,
  };
};

export default getFollowFeed;
