/* eslint-disable jsx-a11y/no-autofocus */
import TimerFormWrapper from './styled';

const TimerForm = ({
  handleOnInput,
  hour,
  min,
  sec,
  onHourChange,
  onMinChange,
  onSecChange,
}) => {
  return (
    <TimerFormWrapper>
      <input
        type='number'
        placeholder='00'
        id='hour'
        name='hour'
        value={hour}
        onInput={handleOnInput}
        onChange={onHourChange}
        autoFocus
        required
      />
      <span>시간</span>
      <input
        type='number'
        placeholder='00'
        value={min}
        id='min'
        name='min'
        required
        onInput={handleOnInput}
        onChange={onMinChange}
      />
      <span>분</span>
      <input
        type='number'
        value={sec}
        placeholder='00'
        id='sec'
        name='sec'
        required
        onInput={handleOnInput}
        onChange={onSecChange}
      />
      <span>초</span>
    </TimerFormWrapper>
  );
};

export default TimerForm;
