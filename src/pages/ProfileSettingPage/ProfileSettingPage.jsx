import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import postProfileImg from '../../api/ProfileSetting/postProfileImg';
import postUserAccountNameValid from '../../api/ProfileSetting/postUserProfileSetting';
import ProfileSettingTemplate from '../../components/template/ProfileSettingTemplate/ProfileSettingTemplate';
import { url } from '../../api/axios-api';

const ProfileSettingPage = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    accountname: '',
    intro: '',
  });

  const [imgSrc, setImgSrc] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidUseID, setIsValidUseID] = useState(false);
  const [userNameMessage, setUserNameMessage] = useState('');
  const [userIdMessage, setUserIdMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const isValid = (target, value) => {
    if (target === 'username') {
      if (value.length > 10 || (value.length < 2 && value !== '')) {
        setIsValidUsername(false);
        setUserNameMessage('* 2~10자 이내로 입력해주세요');
      } else {
        setIsValidUsername(true);
        setUserNameMessage('');
      }
    } else if (target === 'accountname') {
      const regExp = /^[a-z0-9A-Z_.]{2,16}$/;
      if (!regExp.test(value)) {
        setIsValidUseID(false);
        setUserIdMessage('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      } else {
        setIsValidUseID(true);
        setUserIdMessage('');
      }
    }
  };

  const imgUploadMutaion = useMutation(postProfileImg, {
    onSuccess(resData) {
      setImgSrc(`${url}/${resData.filename}`);
    },
    onError(err) {
      console.log(err);
    },
  });

  const accountNameVaildMutaion = useMutation(postUserAccountNameValid, {
    onSuccess(data) {
      if (data.message === '사용 가능한 계정ID 입니다.') {
        setUserIdMessage(data.message);
        console.log(data);
        navigate('/login', {
          state: inputValue.accountname,
        });

        console.log(navigate);
      } else if (data.message === '이미 가입된 계정ID 입니다.') {
        setUserIdMessage(data.message);
        console.log(data);
      }
    },
    onError(data) {
      console.log(data.response.data.message);
    },
  });

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    isValid(name, value);
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
    accountNameVaildMutaion.mutate({
      user: { accountname: inputValue.accountname },
    });
  };

  const onChangeImg = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    console.log(event.target.files[0]);
    imgUploadMutaion.mutate(formData);
  };

  return (
    <ProfileSettingTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      inputValue={inputValue}
      userError={userNameMessage}
      onChangeImg={onChangeImg}
      AccountError={userIdMessage}
      imgSrc={imgSrc}
    />
  );
};

export default ProfileSettingPage;
