import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';
import { UserProfileWrapper } from './styled';

// 시간 계산
const timeFuc = (commentTime) => {
  const today = new Date();
  const timeValue = new Date(commentTime);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

const UserCommentProfile = ({ src, userName, time }) => {
  return (
    <UserProfileWrapper>
      <Img src={src} alt='프로필 사진' width='42px' height='42px' />
      <div className='comment-profile-text'>
        <FeedText type='username'>{userName}</FeedText>
        <span>{timeFuc(time)}</span>
      </div>
    </UserProfileWrapper>
  );
};

export default UserCommentProfile;
