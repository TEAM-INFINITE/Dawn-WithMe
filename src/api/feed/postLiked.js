import { accessInstance } from '../axios-api';

const postLiked = async (postId) => {
  const response = await accessInstance.post(`/post/${postId}/heart`);
  return response.data;
};

export default postLiked;
