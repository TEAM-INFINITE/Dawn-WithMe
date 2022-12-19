import { CategoryTextWrapper, CategoryFreePostWrapper } from './styled';
import CategoryFeedCont from '../../molecules/CategoryFeedCont/CategoryFeedCont';
import CategoryUserProfileMore from '../../molecules/CategoryUserProfileMore/CategoryUserProfileMore';
import profileImg from '../../../assets/images/profile-logo.png';

const CategoryFeedCard = ({ data }) => {
  const { itemImage, link, updatedAt, id } = data;
  const { accountname, username, image } = data.author;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;
  const postDate = updatedAt.split('-');
  console.log(data);

  return (
    <CategoryFreePostWrapper>
      <CategoryUserProfileMore
        userName={username}
        userId={accountname}
        src={basicProfileImg}
      />
      <CategoryTextWrapper>
        <CategoryFeedCont src={itemImage} id={id}>
          {link}
        </CategoryFeedCont>
        <p>
          {postDate[0]}년 {postDate[1]}월 {postDate[2].slice(0, 2)}일
        </p>
      </CategoryTextWrapper>
    </CategoryFreePostWrapper>
  );
};

export default CategoryFeedCard;
