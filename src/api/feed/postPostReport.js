import { accessInstance } from '../axios-api';

const postPostReport = async ({ postId }) => {
  const response = await accessInstance.post(`/post/${postId}/report`);
  return response.data;
};

export default postPostReport;
