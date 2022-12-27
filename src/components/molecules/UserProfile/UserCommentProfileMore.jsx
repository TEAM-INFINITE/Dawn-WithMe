import { Link } from 'react-router-dom';
import { ProfileMoreWrapper } from './styled';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import UserCommentProfile from './UserCommentProfile';

const UserCommentProfileMore = ({ data }) => {
  return (
    <ProfileMoreWrapper>
      <Link to='/profile'>
        <UserCommentProfile
          src={data.author.image}
          userName={data.author.username}
          time={data.createdAt}
        />
      </Link>
      <button type='button'>
        <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
      </button>
    </ProfileMoreWrapper>
  );
};

export default UserCommentProfileMore;
