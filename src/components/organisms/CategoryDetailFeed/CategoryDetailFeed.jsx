import CategoryDetailFeedWrapper from './styled';
import CategoryFeedCont from '../../molecules/CategoryFeedCont/CategoryFeedCont';
import profileImg from '../../../assets/images/profile-logo.png';
import CategoryDetailUserProfile from '../../molecules/CategoryDetailUserProfile/CategoryDetailUserProfile';

const CategoryDetailFeed = ({ data }) => {
  const { itemImage, link, updatedAt, id, itemName, price } = data;
  const { accountname, username, image } = data.author;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;
  const postDate = updatedAt.split('-');
  console.log(Number(postDate[2]));
  return (
    <CategoryDetailFeedWrapper>
      <CategoryDetailUserProfile
        userName={username}
        userId={accountname}
        src={basicProfileImg}
        type={itemName}
      />
      <CategoryFeedCont src={itemImage} id={id} type={itemName} people={price}>
        {link}
      </CategoryFeedCont>
      <p>
        {postDate[0]}년 {postDate[1]}월 {postDate[2].slice(0, 2)}일
      </p>
    </CategoryDetailFeedWrapper>
  );
};

export default CategoryDetailFeed;
