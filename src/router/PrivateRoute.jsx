import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const authenticated = localStorage.getItem('token');

  return !authenticated ? (
    <Navigate to='/' {...alert('로그인 이후 접근 가능한 페이지입니다.')} />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
