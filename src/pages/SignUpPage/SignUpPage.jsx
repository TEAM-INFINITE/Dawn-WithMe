import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import postUserSignUp from '../../api/SignUp/postUserSignUp';
import SignUpTemplate from '../../components/template/SignUpTemplate/SignUpTemplate';
import { isErrorAtom } from '../../recoil/atom';

const SignUpPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useRecoilState(isErrorAtom);
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();

  const SignUpMutation = useMutation(postUserSignUp, {
    onSuccess(data) {
      console.log(data);
      if (data.message === '사용 가능한 이메일 입니다.') {
        setEmailMessage(data.message);
        navigate('/profilesetting', { state: loginValue });
        console.log(data);
      } else if (data.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailMessage(data.message);
        console.log(data);
      }
    },
    onError(err) {
      if (err.message === 'Network Error') {
        console.log('zz');
        setIsError(true);
        toast.error(
          `서버에 문제가 있습니다 :( !
            잠시 후 시도해 주세요.`,
          {
            theme: 'dark',
            position: 'top-center',
            autoClose: 3000,
          },
        );
      }
    },
  });

  const isValid = (target, value) => {
    if (target === 'email') {
      const regexEmail =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!regexEmail.test(value)) {
        setIsValidatedEmail(false);
        setEmailMessage('*이메일 형식이 올바르지 않습니다.');
      } else {
        setIsValidatedEmail(true);
        setEmailMessage('');
      }
    } else if (target === 'password') {
      if (value.length < 6 && value.length !== '') {
        setIsValidatedPassword(false);
        setPasswordMessage('* 비밀번호는 6자 이상이어야 합니다.');
      } else {
        setIsValidatedPassword(true);
        setPasswordMessage('');
      }
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
    isValid(name, value);
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();

    SignUpMutation.mutate({ user: { email: loginValue.email } });
  };

  return (
    <SignUpTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      loginValue={loginValue}
      error={emailMessage}
      pwError={passwordMessage}
      isError={isError}
    />
  );
};

export default SignUpPage;
