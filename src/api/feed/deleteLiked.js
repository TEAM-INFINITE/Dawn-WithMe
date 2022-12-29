import { accessInstance } from '../axios-api';

const deleteLiked = async (postId) => {
  const response = await accessInstance.delete(`/post/${postId}/unheart`);
  return response.data;
};

export default deleteLiked;
