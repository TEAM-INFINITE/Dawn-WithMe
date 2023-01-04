import { useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { url } from '../../api/axios-api';
import postImage from '../../api/imgUpload/postImage';
import updateMyProfile from '../../api/profile/updateMyProfile';
import EditProfileTemplate from '../../components/template/EditProfileTemplate/EditProfileTemplate';

const EditProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accountname, username, intro, image } =
    location.state.profileData.user;
  const regExp = /^[a-z0-9A-Z_.]{2,20}$/;
  const [profileData, setProfileData] = useState({
    username,
    accountname,
    intro,
    image,
  });
  const [errorMessage, setErrorMessage] = useState({
    username: '',
    accountname: '',
  });

  const imageUploadMutation = useMutation(postImage, {
    onSuccess(resData) {
      setProfileData({ ...profileData, image: `${url}/${resData.filename}` });
    },
    onError(err) {
      console.log(err);
    },
  });

  const updateProfileMutation = useMutation(updateMyProfile, {
    onSuccess(resData) {
      console.log(resData);
      if (resData.message === '잘못된 접근입니다.') {
        alert(`${resData.message} 다시 시도해 주세요.`);
        return;
      }
      navigate('/myprofile');
    },
    onError(error) {
      console.log(error);
    },
  });

  const isValid = (target, value) => {
    if (target === 'username') {
      if (value.length < 2 || value.length > 10) {
        setErrorMessage({
          ...errorMessage,
          username: '* 2~10자 이내로 입력해주세요',
        });
      } else {
        setErrorMessage({ ...errorMessage, username: '' });
      }
    } else if (target === 'accountname') {
      if (!regExp.test(value)) {
        setErrorMessage({
          ...errorMessage,
          accountname:
            '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다. (2~12자)',
        });
      } else {
        setErrorMessage({ ...errorMessage, accountname: '' });
      }
    } else if (value === '') {
      setErrorMessage({
        ...errorMessage,
        target: '필수 정보입니다.',
      });
    }
  };

  const onChangeImageUpload = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    imageUploadMutation.mutate(formData);
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });

    isValid(name, value);

    if (!value) {
      setErrorMessage({
        ...errorMessage,
        [name]: '필수 정보입니다.',
      });
    }
  };

  const onClickSubmitHandler = (event) => {
    event.preventDefault();

    updateProfileMutation.mutate({ user: { ...profileData } });
  };

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
