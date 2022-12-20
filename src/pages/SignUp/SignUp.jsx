import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import postUserSign from '../../api/SignUp/postUserSign';
import SignUpTemplate from '../../components/template/SignTemplate/SignTemplate';

const SignUP = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
  });

  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const SignMutation = useMutation(postUserSign, {
    onSuccess(data) {
      if (data.message === `"사용 가능한 이메일 입니다."`) {
        setError(`${data.message}`);
        return;
      }
      navigate('/profile');
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
        setEmailMessage('이메일이 옳지 않습니다.');
      } else {
        setIsValidatedEmail(true);
        setEmailMessage('맞는 이메일 입니다.');
      }
    } else if (target === 'password') {
      if (value.length < 6 && value.length !== '') {
        setIsValidatedPassword(false);
        setPasswordMessage('비밀번호가 옳지 않습니다');
      } else {
        setIsValidatedPassword(true);
        setPasswordMessage('맞는 비밀번호입니다');
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
    SignMutation.mutate({ user: loginValue });
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

export default SignUP;
