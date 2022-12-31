import { accessInstance } from '../axios-api';

const deleteComment = async ({ postId, commentId }) => {
  const response = await accessInstance.delete(
    `/post/${postId}/comments/${commentId}`,
  );
  return { data: response.data, id: commentId };
};

export default deleteComment;
