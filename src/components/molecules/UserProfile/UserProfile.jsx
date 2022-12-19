import Img from '../../atoms/Img/Img';
import { UserName, UserId, UserProfileWrapper } from './styled';

const UserProfile = ({ userName, userId, src }) => {
  return (
    <UserProfileWrapper>
      <Img src={src} alt='프로필 사진' width='42px' />
      <div className='profile-text'>
        <UserName>{userName}</UserName>
        <UserId>@{userId}</UserId>
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfile;
