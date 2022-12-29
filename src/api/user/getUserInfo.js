import { accessInstance } from '../axios-api';

const getUserInfo = async () => {
  const response = await accessInstance.get(`/user/myinfo`);
  return response.data;
};

export default getUserInfo;
