import CategoryDetailFeedWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';
import CategoryDetailUserProfile from '../../molecules/CategoryDetailUserProfile/CategoryDetailUserProfile';
import Img from '../../atoms/Img/Img';

const CategoryDetailFeed = ({ data, onClickMoreHandler }) => {
  const { itemImage, link, updatedAt, id, itemName, price } = data;
  const { accountname, username, image } = data.author;
  const basicProfileImg =
    image === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : image;
  const postDate = updatedAt.split('-');
  return (
    <CategoryDetailFeedWrapper>
      <CategoryDetailUserProfile
        userName={username}
        userId={accountname}
        src={basicProfileImg}
        type={itemName}
        id={id}
        onClickMoreHandler={onClickMoreHandler}
      />
      <p className='title'>{link}</p>
      <Img src={itemImage} alt='게시판 사진' width='100%' className='feedImg' />
      {itemName === 'study' && (
        <p className='people'>
          참여 인원 {Math.ceil(price / 2)}/<span>{price}</span>
        </p>
      )}
      <span className='date'>
        {postDate[0]}년 {postDate[1]}월 {parseInt(postDate[2], 10)}일
      </span>
    </CategoryDetailFeedWrapper>
  );
};

export default CategoryDetailFeed;
