import Img from '../../atoms/Img/Img';
import TimerForm from '../../organisms/TimerForm/TimerForm';
import TimerWrapper from './styled';
import Button from '../../atoms/Button/Button';
import titleLogo from '../../../assets/images/title-logo.png';

const TimerTemplate = ({ handleOnInput }) => {
  return (
    <TimerWrapper>
      <h2>새벽 타이머</h2>
      <TimerForm handleOnInput={handleOnInput} />
      <Button width='30%' size='large'>
        공부 시작
      </Button>
      <Img src={titleLogo} width='80px' alt='타이틀 로고' />
    </TimerWrapper>
  );
};

export default TimerTemplate;
