/* eslint-disable react/jsx-no-comment-textnodes */
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../../recoil/atom';
import ModalWrapper, { ModalBox } from './styled';

const Modal = ({ onClickModalListHandler }) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const onClickModalCloseHandler = () => {
    setModal({
      ...modal,
      isActive: { header: false, post: false, comment: false },
    });
  };

  return (
    <ModalWrapper>
      <div
        className='background'
        onClick={onClickModalCloseHandler}
        aria-hidden
      />
      <ModalBox>
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
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
