/* eslint-disable react/jsx-no-comment-textnodes */
import { useSetRecoilState } from 'recoil';
import { isModalAtom } from '../../../recoil/atom';
import NewModalWrapper, { NewModalBox } from './styled';

const NewModal = ({ textArray, onClickModalListHandler }) => {
  const setIsModal = useSetRecoilState(isModalAtom);
  const onClickModalCloseHandler = () => {
    setIsModal(false);
  };

  return (
    <NewModalWrapper>
      <div
        className='background'
        onClick={onClickModalCloseHandler}
        aria-hidden
      />
      <NewModalBox>
        <button
          type='button'
          className='modal-btn'
          onClick={onClickModalCloseHandler}
        >
          {' '}
        </button>
        <ul>
          {textArray.map((item) => (
            <li key={item.id}>
              <button
                type='button'
                onClick={() => onClickModalListHandler(item.text)}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </NewModalBox>
    </NewModalWrapper>
  );
};

export default NewModal;
