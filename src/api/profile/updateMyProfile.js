import { accessInstance } from '../axios-api';

const updateMyProfile = async (formData) => {
  const response = await accessInstance.put('/user', formData);
  console.log(response);
  return response.data;
};

export default updateMyProfile;
