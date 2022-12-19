import { Link } from 'react-router-dom';
import CategoryUserProfile from '../CategoryUserProfile/CategoryUserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import CategoryUserProfileMoreWrapper from './styled';

const CategoryUserProfileMore = ({ userName, userId, src }) => {
  return (
    <CategoryUserProfileMoreWrapper>
      <Link to='/profile'>
        <CategoryUserProfile src={src} userName={userName} userId={userId} />
      </Link>
      <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
    </CategoryUserProfileMoreWrapper>
  );
};

export default CategoryUserProfileMore;
