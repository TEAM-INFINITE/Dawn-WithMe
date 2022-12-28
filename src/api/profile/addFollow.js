import { accessInstance } from '../axios-api';

const addFollow = async ({ accountName }) => {
  const response = await accessInstance.post(`/profile/${accountName}/follow`);

  return response.data;
};
export default addFollow;
