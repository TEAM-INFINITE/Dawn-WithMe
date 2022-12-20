import Button from '../../atoms/Button/Button';
import LoginButtonCardWrapper from './styled';
import Img from '../../atoms/Img/Img';
import iconKakaotalk from '../../../assets/images/icon-kakaotalk.png';
import iconGoogle from '../../../assets/images/icon-google.png';
import iconFacebook from '../../../assets/images/icon-facebook.png';

const LoginButtonCard = () => {
  return (
    <LoginButtonCardWrapper>
      <Button width='100%' size='large' type='submit'>
        <Img src={iconKakaotalk} width='18px' alt='카카오톡' />
        카카오톡 계정으로 로그인
      </Button>
      <Button width='100%' size='large' type='submit'>
        <Img src={iconGoogle} width='18px' alt='구글' />
        구글 계정으로 로그인
      </Button>
      <Button width='100%' size='large' type='submit'>
        <Img src={iconFacebook} width='11px' alt='페이스북' />
        페이스북 계정으로 로그인
      </Button>
    </LoginButtonCardWrapper>
  );
};

export default LoginButtonCard;
