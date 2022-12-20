import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import postUserSignUp from '../../api/SignUp/postUserSignUp';
import SignUpTemplate from '../../components/template/SignUpTemplate/SignUpTemplate';

const SignUpPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });

  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();

  const SignUpMutation = useMutation(postUserSignUp, {
    onSuccess(data) {
      if (data.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailMessage(data.message);
        return;
      }
      navigate('/profilesetting', { state: loginValue });
      console.log(navigate);
    },
    onError(err) {
      console.log(err);
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
    console.log(loginValue);
    SignUpMutation.mutate({ user: { email: loginValue.email } });
  };

  return (
    <SignUpTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      loginValue={loginValue}
      error={emailMessage}
      pwError={passwordMessage}
    />
  );
};

export default SignUpPage;
