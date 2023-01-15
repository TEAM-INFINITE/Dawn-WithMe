import { Link } from 'react-router-dom';
import CategoryUserProfile from '../CategoryUserProfile/CategoryUserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import CategoryUserProfileMoreWrapper from './styled';
import ChatButton from '../../atoms/Button/ChatButton/ChatButton';

const CategoryUserProfileMore = ({
  userName,
  userId,
  src,
  type,
  onClickMoreHandler,
  id,
}) => {
  return (
    <CategoryUserProfileMoreWrapper>
      <Link to={`/userprofile/${userId}`}>
        <CategoryUserProfile src={src} userName={userName} userId={userId} />
      </Link>
      {localStorage.getItem('accountname') !== userId && type === 'study' && (
        <ChatButton to='/chatdetail'>참여하기</ChatButton>
      )}
      {localStorage.getItem('accountname') === userId && (
        <button type='button' onClick={() => onClickMoreHandler(id, userId)}>
          <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
        </button>
      )}
    </CategoryUserProfileMoreWrapper>
  );
};

export default CategoryUserProfileMore;
