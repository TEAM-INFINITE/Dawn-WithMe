import { Link, useLocation } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import ProfileText from '../../atoms/P/Profile/ProfileText';
import profileImg from '../../../assets/images/profile-logo.png';
import ProfileInfoCardWrapper, {
  ProfileImgTextWrapper,
  ProfileInfoWrapper,
} from './styled';
import Button from '../../atoms/Button/Button';

const ProfileInfoCard = ({
  profileData,
  isFollow,
  followCount,
  onClickFollowToggle,
}) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const { accountname, username, intro, image, followerCount, followingCount } =
    pathname === 'myprofile' ? profileData.user : profileData.profile;
  const isAccountName = accountname === localStorage.getItem('accountname');
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;

  const followButton = () => {
    if (isFollow) {
      return (
        <Button
          size='medium'
          width='120px'
          className='active'
          onClick={onClickFollowToggle}
        >
          언팔로우
        </Button>
      );
    }
    return (
      <Button size='medium' width='120px' onClick={onClickFollowToggle}>
        팔로우
      </Button>
    );
  };

  return (
    <ProfileInfoCardWrapper>
      <ProfileImgTextWrapper>
        <Link to={`/followers/${accountname}`}>
          <ProfileText fontColor='white' fontWeight='700'>
            {isAccountName ? followerCount : followCount}
          </ProfileText>
          <ProfileText fontColor='#767676' fontSize='10px' lineHeight='12px'>
            followers
          </ProfileText>
        </Link>
        <Img src={basicProfileImg} />
        <Link to={`/followings/${accountname}`}>
          <ProfileText fontColor='white' fontWeight='700'>
            {followingCount}
          </ProfileText>
          <ProfileText fontColor='#767676' fontSize='10px' lineHeight='12px'>
            followings
          </ProfileText>
        </Link>
      </ProfileImgTextWrapper>
      <ProfileInfoWrapper>
        <ProfileText fontColor='#FEAC23' fontSize='16px' lineHeight='20px'>
          {username}
        </ProfileText>
        <ProfileText fontColor='#767676' fontSize='12px' lineHeight='14px'>
          @ {accountname}
        </ProfileText>
        <ProfileText fontColor='#c4c4c4' fontSize='14px' lineHeight='18px'>
          {intro}
        </ProfileText>
        {isAccountName ? (
          <Link className='profile-btn' to='/profilesetting'>
            프로필 수정
          </Link>
        ) : (
          followButton()
        )}
      </ProfileInfoWrapper>
    </ProfileInfoCardWrapper>
  );
};

export default ProfileInfoCard;
