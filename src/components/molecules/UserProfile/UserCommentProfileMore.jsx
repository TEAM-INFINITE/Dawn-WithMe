import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileMoreWrapper } from './styled';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import UserCommentProfile from './UserCommentProfile';
import Modal from '../Modal/Modal';

const UserCommentProfileMore = ({
  id,
  accountName,
  src,
  userName,
  time,
  handleDelete,
}) => {
  // 모달창 열리고 닫히는
  const [onModal, setOnModal] = useState(false);

  const currentAccountName = localStorage.getItem('accountname');
  return (
    <>
      <ProfileMoreWrapper>
        <Link to='/profile'>
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
      {onModal && <Modal />}
    </>
  );
};

export default UserCommentProfileMore;
