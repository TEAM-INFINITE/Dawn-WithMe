import { useState, useEffect, useRef } from 'react';
import TimerTemplate from '../../components/template/TimerTemplate/TimerTemplate';

const TimerPage = () => {
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const [counter, setCounter] = useState(false);

  const onHourChange = (event) => {
    setHour(event.target.value);
  };

  const onMinChange = (event) => {
    setMin(event.target.value);
  };

  const onSecChange = (event) => {
    setSec(event.target.value);
  };

  const initialTime = useRef(0);
  const interval = useRef(null);

  useEffect(() => {
    if (counter === true) {
      interval.current = setInterval(() => {
        initialTime.current -= 1;
        setHour(parseInt(initialTime.current / 60 / 60, 10));
        setMin(parseInt((initialTime.current / 60) % 60, 10));
        setSec(initialTime.current % 60);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  }, [counter]);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  const handleButtonStart = (event) => {
    event.preventDefault();
    initialTime.current =
      Number(hour) * 60 * 60 + Number(min) * 60 + Number(sec);
    setCounter(true);
  };
  console.log(initialTime.current);

  const handleButtonPause = (event) => {
    event.preventDefault();
    setCounter(false);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setHour('');
    setMin('');
    setSec('');
    setCounter(false);
  };

  const handleOnInput = (el) => {
    const inputValue = el.target.value;
    if (inputValue.length > 2) {
      el.target.value = inputValue.substr(0, 2);
    }
  };

  return (
    <TimerTemplate
      handleOnInput={handleOnInput}
      handleButtonStart={handleButtonStart}
      handleButtonPause={handleButtonPause}
      handleReset={handleReset}
      onHourChange={onHourChange}
      onMinChange={onMinChange}
      onSecChange={onSecChange}
      hour={hour}
      min={min}
      sec={sec}
    />
  );
};

export default TimerPage;
