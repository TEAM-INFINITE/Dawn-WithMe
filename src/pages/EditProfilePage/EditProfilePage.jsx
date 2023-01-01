import { useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import { url } from '../../api/axios-api';
import postImage from '../../api/imgUpload/postImage';
import EditProfileTemplate from '../../components/template/EditProfileTemplate/EditProfileTemplate';

const EditProfilePage = () => {
  const location = useLocation();
  const { accountname, username, intro, image } =
    location.state.profileData.user;

  const [profileData, setProfileData] = useState({
    username,
    accountname,
    intro,
    image,
  });
  const [errorMessage, setErrorMessage] = useState({
    username: '',
    accountname: '',
    intro: '',
    image: '',
  });

  const imageUploadMutation = useMutation(postImage, {
    onSuccess(resData) {
      setProfileData({ ...profileData, image: `${url}/${resData.filename}` });
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangeImageUpload = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    imageUploadMutation.mutate(formData);
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });

    if (!event.target.value) {
      setErrorMessage({
        ...errorMessage,
        [name]: '필수 정보입니다.',
      });
    }
  };

  const onClickSubmitHandler = (event) => {
    event.preventDefault();
  };

  console.log(profileData);
  console.log(errorMessage);

  return (
    <EditProfileTemplate
      profileData={profileData}
      onChangeInputHandler={onChangeInputHandler}
      onClickSubmitHandler={onClickSubmitHandler}
      onChangeImageUpload={onChangeImageUpload}
      errorMessage={errorMessage}
    />
  );
};

export default EditProfilePage;
