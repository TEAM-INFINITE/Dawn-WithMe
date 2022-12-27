import { accessInstance } from '../axios-api';

const getMyProfile = async () => {
  const response = await accessInstance.get('/user/myinfo');

  return response.data;
};

export default getMyProfile;
