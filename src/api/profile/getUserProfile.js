import { accessInstance } from '../axios-api';

const getUserProfile = async (accountName) => {
  const response = await accessInstance.get(`/profile/${accountName}`);

  return response.data;
};
export default getUserProfile;
