import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import postUserLogin from '../../api/login/postUserLogin';
import LoginTemplate from '../../components/template/LoginTemplate/LoginTemplate';
import { isErrorAtom } from '../../recoil/atom';

const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useRecoilState(isErrorAtom);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(postUserLogin, {
    onSuccess(data) {
      if (data.status === 422) {
        setError(`${data.message}`);

        return;
      }
      localStorage.setItem('accountname', data.user.accountname);
      localStorage.setItem('token', data.user.token);
      navigate('/home');
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
      isError={isError}
    />
  );
};

export default LoginPage;
