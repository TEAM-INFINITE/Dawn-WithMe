import ModalWrapper from './styled';

const Modal = () => {
  return (
    <ModalWrapper>
      <div className='bar'> </div>
      <ul>
        <li>삭제</li>
        <li>신고</li>
      </ul>
    </ModalWrapper>
  );
};

export default Modal;
