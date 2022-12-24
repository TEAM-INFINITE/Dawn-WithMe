import { Link } from 'react-router-dom';
import ChatButton from '../../atoms/Button/ChatButton/ChatButton';
import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';

import CategoryDetailUserProfileWrapper from './styled';

const CategoryDetailUserProfile = ({ userName, userId, src, type }) => {
  return (
    <CategoryDetailUserProfileWrapper>
      <Link to='/profile' className='profile-btn'>
        <Img src={src} alt='프로필 사진' width='42px' />
        <div className='profile-text'>
          <FeedText type='username'>{userName}</FeedText>
          <FeedText type='userid'>{userId}</FeedText>
        </div>
      </Link>
      {type === 'study' && (
        <ChatButton className='chat-btn' to='/chat'>
          참여하기
        </ChatButton>
      )}
    </CategoryDetailUserProfileWrapper>
  );
};

export default CategoryDetailUserProfile;
