import { useState, useEffect } from 'react';
import SplashTemplate from '../../components/template/SplashTemplate/SplashTemplate';
import LoginButtonTemplate from '../../components/template/SplashTemplate/LoginButtonTemplate';
import FullWrapper from '../../components/atoms/Wrapper/FullWrapper';

const SplashPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const LoadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(LoadingTimer);
  }, []);

  return (
    <FullWrapper backgroundColor='rgb(56, 28, 121)'>
      {loading && <SplashTemplate />}
      {!loading && <LoginButtonTemplate />}
    </FullWrapper>
  );
};

export default SplashPage;
