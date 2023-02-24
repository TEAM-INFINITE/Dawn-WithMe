import { accessInstance } from '../axios-api';

const putFeedPost = async ({ id, post }) => {
  const response = await accessInstance.put(`/post/${id}`, {
    post: { ...post },
  });

  return response.data;
};
export default putFeedPost;
