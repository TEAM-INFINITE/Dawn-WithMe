import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import ProfileText from '../../atoms/P/Profile/ProfileText';
import profileImg from '../../../assets/images/profile-logo.png';
import ProfileInfoCardWrapper, {
  ProfileImgTextWrapper,
  ProfileInfoWrapper,
} from './styled';

const ProfileInfoCard = ({ profileData }) => {
  const { accountname, username, intro, image, followerCount, followingCount } =
    profileData.user;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;
  return (
    <ProfileInfoCardWrapper>
      <ProfileImgTextWrapper>
        <Link to='/myprofile/followers'>
          <ProfileText fontColor='white' fontWeight='700'>
            {followerCount}
          </ProfileText>
          <ProfileText fontColor='#767676' fontSize='10px' lineHeight='12px'>
            followers
          </ProfileText>
        </Link>
        <Img src={basicProfileImg} />
        <Link to='/myprofile/followings'>
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
        <Link className='profile-btn' to='/profilesetting'>
          프로필 수정
        </Link>
      </ProfileInfoWrapper>
    </ProfileInfoCardWrapper>
  );
};

export default ProfileInfoCard;
