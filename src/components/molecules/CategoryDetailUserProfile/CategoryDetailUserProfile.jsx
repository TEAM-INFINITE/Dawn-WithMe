import ChatButton from '../../atoms/Button/ChatButton/ChatButton';
import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';

import CategoryUserProfileWrapper from './styled';

const CategoryDetailUserProfile = ({ userName, userId, src, type }) => {
  return (
    <CategoryUserProfileWrapper>
      <Img src={src} alt='프로필 사진' width='42px' />
      <div className='profile-text'>
        <FeedText type='username'>{userName}</FeedText>
        <FeedText type='userid'>{userId}</FeedText>
      </div>
      {type === 'study' && <ChatButton to='/chat'>참여하기</ChatButton>}
    </CategoryUserProfileWrapper>
  );
};

export default CategoryDetailUserProfile;
