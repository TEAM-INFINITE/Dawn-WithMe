import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import postUserLogin from '../../api/login/postUserLogin';
import LoginTemplate from '../../components/template/LoginTemplate/LoginTemplate';

const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(postUserLogin, {
    onSuccess(data) {
      console.log(data);
      if (data.status === 422) {
        setError(`${data.message}`);
        return;
      }

      localStorage.setItem('token', data.user.token);
      navigate('/');
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
    loginMutation.mutate({ user: loginValue });
  };

  return (
    <LoginTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      loginValue={loginValue}
      error={error}
    />
  );
};

export default LoginPage;
