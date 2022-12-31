import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import Img from '../../atoms/Img/Img';
import FollowItemWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';

const FollowItem = ({ data, onClickFollowToggle }) => {
  const { username, intro, image, isfollow, accountname } = data;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;

  return (
    <FollowItemWrapper>
      <Link
        to={
          accountname !== localStorage.getItem('accountname')
            ? `/userprofile/${accountname}`
            : '/myprofile'
        }
      >
        <Img src={basicProfileImg} />
        <div>
          <p>{username}</p>
          <p>{intro}</p>
        </div>
      </Link>
      {accountname !== localStorage.getItem('accountname') && (
        <Button
          type='button'
          onClick={() => onClickFollowToggle(accountname, isfollow)}
          className={isfollow ? 'active' : ''}
        >
          {isfollow ? '취소' : '팔로우'}
        </Button>
      )}
    </FollowItemWrapper>
  );
};

export default FollowItem;
