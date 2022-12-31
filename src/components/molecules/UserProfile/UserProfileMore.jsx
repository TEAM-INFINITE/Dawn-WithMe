import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import { ProfileMoreWrapper } from './styled';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

const UserProfileMore = ({
  data,
  onClickDeletePost,
  onClickReportPost,
  feedId,
  postId,
}) => {
  const myAccountName = localStorage.getItem('accountname');
  const { author } = data;

  // 모달창 열리고 닫히는
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);

  // 모달 내용
  const modalObj = [];
  if (myAccountName === author.accountname) {
    modalObj.push({
      type: 'feedpost',
      text: { 삭제: '', 수정: '' },
      alertText: ['게시글을 삭제할까요?', '삭제'],
    });
  } else {
    modalObj.push({
      type: 'feedpost',
      text: { 신고하기: '' },
      alertText: ['게시글을 신고하시겠어요?', '신고'],
    });
  }

  const modalCont = modalObj[0];

  return (
    <>
      <ProfileMoreWrapper>
        <Link
          to={
            myAccountName === author.accountname
              ? `/myprofile`
              : `/userprofile/${author.accountname}`
          }
        >
          <UserProfile
            src={author.image}
            userName={author.username}
            userId={author.accountname}
          />
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
          onClickDeletePost={onClickDeletePost}
          onClickReportPost={onClickReportPost}
          feedId={feedId}
          postId={postId}
        />
      )}
    </>
  );
};

export default UserProfileMore;
