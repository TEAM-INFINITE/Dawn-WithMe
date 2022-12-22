import { accessInstance } from '../axios-api';

const getCommentList = async (postId) => {
  const response = await accessInstance.get(`/post/${postId}/comments`);

  return response.data;
};

export default getCommentList;
