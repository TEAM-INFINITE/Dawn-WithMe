import { useState, useEffect } from 'react';
import SplashTemplate from '../../components/template/SplashTemplate/SplashTemplate';
import LoginButtonTemplate from '../../components/template/LoginButtonTemplate/LoginButtonTemplate';

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
    <>
      {loading && <SplashTemplate />}
      {!loading && <LoginButtonTemplate />}
    </>
  );
};

export default SplashPage;
