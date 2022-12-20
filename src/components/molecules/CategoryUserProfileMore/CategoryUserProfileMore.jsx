import { Link } from 'react-router-dom';
import CategoryUserProfile from '../CategoryUserProfile/CategoryUserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import CategoryUserProfileMoreWrapper from './styled';
import ChatButton from '../../atoms/Button/ChatButton/ChatButton';

const CategoryUserProfileMore = ({ userName, userId, src, type }) => {
  return (
    <CategoryUserProfileMoreWrapper>
      <Link to='/profile'>
        <CategoryUserProfile src={src} userName={userName} userId={userId} />
      </Link>
      {type !== 'study' && (
        <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
      )}
      {type === 'study' && <ChatButton to='/chat'>참여하기</ChatButton>}
    </CategoryUserProfileMoreWrapper>
  );
};

export default CategoryUserProfileMore;
