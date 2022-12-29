import { accessInstance } from '../axios-api';

const postCommentWrite = async (formData) => {
  const response = await accessInstance.post(
    `/post/${formData.postId}/comments`,
    { comment: formData.comment },
  );
  return response.data;
};

export default postCommentWrite;
