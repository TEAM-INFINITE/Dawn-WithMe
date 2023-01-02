import { useNavigate } from 'react-router-dom';
import { OpacityBg } from '../Modal/styled';
import AlertWrapper from './styled';

const Alert = ({
  onClose,
  type,
  questionText,
  rightBtnText,
  onClickDeletePost,
  onClickReportPost,
  onClickDeleteComment,
  onClickReportComment,
  postId,
  commentId,
}) => {
  const navigate = useNavigate();
  // 로그아웃
  const removeInfo = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('accountname');
    navigate('/');
  };

  function onClickDeleteBtn() {
    // 내 댓글 삭제
    if (type === 'comment' && rightBtnText === '삭제') {
      onClickDeleteComment(postId, commentId);
    }

    // 댓글 신고
    if (type === 'comment' && rightBtnText === '신고') {
      onClickReportComment(postId, commentId);
      onClose();
    }

    // 피드 게시글 삭제
    if (type === 'feedpost' && rightBtnText === '삭제') {
      onClickDeletePost(postId);
    }

    // 피드 게시글 신고
    if (type === 'feedpost' && rightBtnText === '신고') {
      onClickReportPost(postId);
      onClose();
    }

    // 채팅방 나가기
  }

  return (
    <OpacityBg>
      <AlertWrapper>
        <div>
          <strong>{questionText}</strong>
          <button type='button' onClick={onClose}>
            취소
          </button>
          {rightBtnText === '로그아웃' ? (
            <button type='button' onClick={removeInfo} className='right'>
              {rightBtnText}
            </button>
          ) : (
            <button type='button' onClick={onClickDeleteBtn} className='right'>
              {rightBtnText}
            </button>
          )}
        </div>
      </AlertWrapper>
    </OpacityBg>
  );
};

export default Alert;
