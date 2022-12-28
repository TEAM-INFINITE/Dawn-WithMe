import { useState } from 'react';
import TimerFormWrapper from './styled';

const TimerForm = ({ handleOnInput }) => {
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onHourChange = (event) => {
    setHour(event.target.value);
  };

  const onMinChange = (event) => {
    setMin(event.target.value);
  };

  const onSecChange = (event) => {
    setSec(event.target.value);
  };

  return (
    <TimerFormWrapper>
      <input
        type='number'
        placeholder='00'
        id='hour'
        value={hour}
        onInput={handleOnInput}
        onChange={onHourChange}
        required
      />
      <span>시간</span>
      <input
        type='number'
        placeholder='00'
        value={min}
        id='min'
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
        required
        onInput={handleOnInput}
        onChange={onSecChange}
      />
      <span className='lee'>초</span>
    </TimerFormWrapper>
  );
};

export default TimerForm;
