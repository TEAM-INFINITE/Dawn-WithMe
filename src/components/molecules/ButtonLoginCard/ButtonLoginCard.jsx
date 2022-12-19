import Button from '../../atoms/Button/Button';
import ButtonLoginCardWrapper from './styled';

const ButtonLoginCard = () => {
  return (
    <ButtonLoginCardWrapper>
      <Button width='100%' size='large' type='submit'>
        카카오톡 계정으로 로그인
      </Button>
      <Button width='100%' size='large' type='submit'>
        구글 계정으로 로그인
      </Button>
      <Button width='100%' size='large' type='submit'>
        페이스북 계정으로 로그인
      </Button>
    </ButtonLoginCardWrapper>
  );
};

export default ButtonLoginCard;
