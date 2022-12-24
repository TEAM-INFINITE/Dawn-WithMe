import { accessInstance } from '../axios-api';

const deleteComment = async (postId, commentId) => {
  const response = await accessInstance.delete(
    `/post/${postId}/comments/${commentId}`,
  );
  return response.data;
};

export default deleteComment;
