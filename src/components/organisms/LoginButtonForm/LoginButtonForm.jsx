import { Link } from 'react-router-dom';
import LoginButtonCard from '../../molecules/LoginButtonCard/LoginButtonCard';
import LoginButtonFormWrapper from './styled';
// import StarCard from '../../molecules/StarCard/StarCard';
// import Star from '../../atoms/Star/Star';

const LoginButtonForm = () => {
  return (
    <LoginButtonFormWrapper>
      {/* <StarCard /> */}
      {/* <Star className='moon' /> */}
      <LoginButtonCard />
      <Link to='/login'>이메일로 로그인</Link>
      <span>|</span>
      <Link to='/signup'>회원가입</Link>
    </LoginButtonFormWrapper>
  );
};

export default LoginButtonForm;
