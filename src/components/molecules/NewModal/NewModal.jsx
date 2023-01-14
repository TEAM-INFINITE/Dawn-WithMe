/* eslint-disable react/jsx-no-comment-textnodes */
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../../recoil/atom';
import NewModalWrapper, { NewModalBox } from './styled';

const NewModal = ({ onClickModalListHandler }) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const onClickModalCloseHandler = () => {
    setModal({
      ...modal,
      isActive: { header: false, post: false, comment: false },
    });
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
          {modal.modalListText.map((item) => (
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
