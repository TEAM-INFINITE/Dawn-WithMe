import { Link } from 'react-router-dom';
import ChatButton from '../../atoms/Button/ChatButton/ChatButton';
import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import CategoryDetailUserProfileWrapper from './styled';

const CategoryDetailUserProfile = ({
  userName,
  userId,
  src,
  type,
  onClickMoreHandler,
  id,
}) => {
  return (
    <CategoryDetailUserProfileWrapper>
      <Link to={`/userprofile/${userId}`} className='profile-btn'>
        <Img src={src} alt='프로필 사진' width='42px' />
        <div className='profile-text'>
          <FeedText type='username'>{userName}</FeedText>
          <FeedText type='userid'>{userId}</FeedText>
        </div>
      </Link>
      {localStorage.getItem('accountname') !== userId && type === 'study' && (
        <ChatButton className='chat-btn' to='/chatdetail'>
          참여하기
        </ChatButton>
      )}
      {localStorage.getItem('accountname') === userId && (
        <button type='button' onClick={() => onClickMoreHandler(id)}>
          <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
        </button>
      )}
    </CategoryDetailUserProfileWrapper>
  );
};

export default CategoryDetailUserProfile;
