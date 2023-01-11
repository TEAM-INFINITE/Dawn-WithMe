import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileMoreWrapper } from './styled';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import UserCommentProfile from './UserCommentProfile';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

const UserCommentProfileMore = ({
  id,
  postId,
  src,
  userName,
  time,
  onClickDeleteComment,
  onClickReportComment,
  accountName,
}) => {
  const currentAccountName = localStorage.getItem('accountname');

  // 모달창 열리고 닫히는
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);
  // 모달 내용
  const modalObj = [];
  if (currentAccountName === accountName) {
    modalObj.push({
      type: 'comment',
      text: { 삭제: '' },
      alertText: ['댓글을 삭제하시겠어요?', '삭제'],
    });
  } else {
    modalObj.push({
      type: 'comment',
      text: { 신고하기: '' },
      alertText: ['댓글을 신고하시겠어요?', '신고'],
    });
  }

  const modalCont = modalObj[0];

  return (
    <>
      <ProfileMoreWrapper>
        <Link
          to={
            currentAccountName === accountName
              ? '/myprofile'
              : `/userprofile/${accountName}`
          }
        >
          <UserCommentProfile src={src} userName={userName} time={time} />
        </Link>
        <button
          type='button'
          onClick={() => {
            setOnModal((prev) => !prev);
          }}
        >
          <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
        </button>
      </ProfileMoreWrapper>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          setOnModal={setOnModal}
          setOnAlert={setOnAlert}
          modalCont={modalCont}
        />
      )}
      {onAlert && (
        <Alert
          type={modalCont.type}
          questionText={modalCont.alertText[0]}
          rightBtnText={modalCont.alertText[1]}
          onClose={() => setOnAlert(false)}
          setOnModal={setOnModal}
          onClickDeleteComment={onClickDeleteComment}
          onClickReportComment={onClickReportComment}
          postId={postId}
          commentId={id}
          accountName={accountName}
        />
      )}
    </>
  );
};

export default UserCommentProfileMore;
