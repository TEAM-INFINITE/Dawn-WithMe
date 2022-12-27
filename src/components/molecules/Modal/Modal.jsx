import ModalWrapper, { OpacityBg } from './styled';

const Modal = ({
  onClose,
  onClickDeleteComment,
  onClickReportComment,
  postId,
  commentId,
  accountName,
}) => {
  const currentAccountName = localStorage.getItem('accountname');

  return (
    <>
      <OpacityBg onClick={onClose} />
      <ModalWrapper>
        <div className='bar'> </div>
        <ul>
          {currentAccountName === accountName ? (
            <li>
              <button
                className='btn-modal'
                type='button'
                onClick={() => onClickDeleteComment(postId, commentId)}
              >
                삭제
              </button>
            </li>
          ) : (
            <li>
              <button
                type='button'
                className='btn-modal report'
                onClick={() => onClickReportComment(postId, commentId)}
              >
                신고하기
              </button>
            </li>
          )}
        </ul>
      </ModalWrapper>
    </>
  );
};

export default Modal;
