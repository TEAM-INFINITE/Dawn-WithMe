import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import profileImg from '../../../assets/images/profile-logo.png';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import { ProfileMoreWrapper } from './styled';

const UserProfileMore = () => {
  return (
    <ProfileMoreWrapper>
      <Link to='/profile'>
        <UserProfile
          src={profileImg}
          userName='아산의 짱'
          userId='Ansanzzang'
        />
      </Link>
      <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
    </ProfileMoreWrapper>
  );
};

export default UserProfileMore;
