import { accessInstance } from '../axios-api';

const deletePost = async ({ postId }) => {
  const response = await accessInstance.delete(`/post/${postId}`);
  return { data: response.data, id: postId };
};

export default deletePost;
