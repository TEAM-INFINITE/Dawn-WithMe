import { accessInstance } from '../axios-api';

const postCommentReport = async ({ postId, commentId }) => {
  const response = await accessInstance.post(
    `/post/${postId}/comments/${commentId}/report`,
  );
  return response.data;
};

export default postCommentReport;
