import { CategoryTextWrapper, CategoryFreePostWrapper } from './styled';
import CategoryFeedCont from '../../molecules/CategoryFeedCont/CategoryFeedCont';
import CategoryUserProfileMore from '../../molecules/CategoryUserProfileMore/CategoryUserProfileMore';
import profileImg from '../../../assets/images/profile-logo.png';

const CategoryFeedCard = ({ data, onClickMoreHandler }) => {
  const { itemImage, link, updatedAt, id, itemName, price } = data;
  const { accountname, username, image } = data.author;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;
  const postDate = updatedAt.split('-');
  return (
    <CategoryFreePostWrapper>
      <CategoryUserProfileMore
        userName={username}
        userId={accountname}
        src={basicProfileImg}
        type={itemName}
        id={id}
        onClickMoreHandler={onClickMoreHandler}
      />
      <CategoryTextWrapper>
        <CategoryFeedCont
          src={itemImage}
          id={id}
          type={itemName}
          people={price}
        >
          {link}
        </CategoryFeedCont>
        <span>
          {postDate[0]}년 {postDate[1]}월 {parseInt(postDate[2], 10)}일
        </span>
      </CategoryTextWrapper>
    </CategoryFreePostWrapper>
  );
};

export default CategoryFeedCard;
