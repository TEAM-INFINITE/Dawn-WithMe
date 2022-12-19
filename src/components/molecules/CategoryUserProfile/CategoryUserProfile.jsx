import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';
import CategoryUserProfileWrapper from './styled';

const UserProfile = ({ userName, userId, src }) => {
  return (
    <CategoryUserProfileWrapper>
      <Img src={src} alt='프로필 사진' width='42px' />
      <div className='profile-text'>
        <FeedText type='username'>{userName}</FeedText>
        <FeedText type='userid'>{userId}</FeedText>
      </div>
    </CategoryUserProfileWrapper>
  );
};

export default UserProfile;
