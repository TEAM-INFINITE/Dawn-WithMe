import ModalWrapper from './styled';

const Modal = ({ onClickDeleteComment, postId, commentId, accountName }) => {
  const currentAccountName = localStorage.getItem('accountname');
  console.log(postId, commentId);
  return (
    <ModalWrapper>
      <div className='bar'> </div>
      <ul>
        {currentAccountName === accountName ? (
          <li>
            <button
              type='button'
              onClick={() => onClickDeleteComment(postId, commentId)}
            >
              삭제
            </button>
          </li>
        ) : (
          <li>
            <button type='button'>신고</button>
          </li>
        )}
      </ul>
    </ModalWrapper>
  );
};

export default Modal;
