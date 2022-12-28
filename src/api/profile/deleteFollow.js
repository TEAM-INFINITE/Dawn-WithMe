import { accessInstance } from '../axios-api';

const deleteFollow = async ({ accountName }) => {
  const response = await accessInstance.delete(
    `/profile/${accountName}/unfollow`,
  );

  return response.data;
};
export default deleteFollow;
