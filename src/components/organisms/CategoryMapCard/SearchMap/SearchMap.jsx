/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import SearchFormWrapper from './styled';

const SearchMap = () => {
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
  };

  return (
    <>
      <SearchFormWrapper className='inputForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder='찾고싶은 스터디 카페를 입력해주세요'
          onChange={onChange}
          value={inputText}
          autoFocus
        />
        <button type='submit' disabled={!inputText}>
          검색
        </button>
      </SearchFormWrapper>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchMap;
