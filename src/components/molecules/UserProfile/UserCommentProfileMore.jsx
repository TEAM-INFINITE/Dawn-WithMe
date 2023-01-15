import { Link } from 'react-router-dom';
import { ProfileMoreWrapper } from './styled';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import UserCommentProfile from './UserCommentProfile';

const UserCommentProfileMore = ({
  id,
  postId,
  src,
  userName,
  time,
  onClickCommentMoreHandler,
  accountName,
}) => {
  const currentAccountName = localStorage.getItem('accountname');

  return (
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
          onClickCommentMoreHandler(id, postId, accountName);
        }}
      >
        <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
      </button>
    </ProfileMoreWrapper>
  );
};

export default UserCommentProfileMore;
