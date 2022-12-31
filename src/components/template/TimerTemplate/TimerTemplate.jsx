import Img from '../../atoms/Img/Img';
import TimerForm from '../../organisms/TimerForm/TimerForm';
import TimerWrapper from './styled';
import Button from '../../atoms/Button/Button';
import titleLogo from '../../../assets/images/title-logo.png';

const TimerTemplate = ({
  handleOnInput,
  handleButtonStart,
  handleButtonPause,
  handleReset,
  onHourChange,
  onMinChange,
  onSecChange,
  hour,
  min,
  sec,
}) => {
  return (
    <TimerWrapper>
      <h2>새벽 타이머</h2>
      <TimerForm
        handleOnInput={handleOnInput}
        onHourChange={onHourChange}
        onMinChange={onMinChange}
        onSecChange={onSecChange}
        hour={hour}
        min={min}
        sec={sec}
      />
      <Button
        width='30%'
        size='large'
        onClick={handleButtonStart}
        disabled={!hour && !min && !sec}
      >
        공부 시작
      </Button>

      <Button
        width='30%'
        size='large'
        onClick={handleButtonPause}
        disabled={!hour && !min && !sec}
      >
        정지
      </Button>

      <Button
        width='30%'
        size='large'
        onClick={handleReset}
        disabled={!hour && !min && !sec}
      >
        리셋
      </Button>
      <Img src={titleLogo} width='80px' alt='타이틀 로고' />
    </TimerWrapper>
  );
};

export default TimerTemplate;
