import { accessInstance } from '../axios-api';

const getFeedDetail = async (id) => {
  const response = await accessInstance.get(`/post/${id}`);

  return response.data;
};

export default getFeedDetail;
