import { accessInstance } from '../axios-api';

const getCommentList = async (postId) => {
  const response = await accessInstance.get(
    `/post/${postId}/comments/?limit=20`,
  );

  return response.data;
};

export default getCommentList;
