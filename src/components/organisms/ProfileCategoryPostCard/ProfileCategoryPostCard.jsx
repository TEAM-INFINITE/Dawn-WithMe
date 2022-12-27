import CategoryPostItem from '../../atoms/Li/CategoryPostItem/CategoryPostItem';
import ProfileCategoryPostCardWrapper from './styled';

const ProfileCategoryPostCard = ({ selectCategoryData, onChange }) => {
  return (
    <ProfileCategoryPostCardWrapper>
      <h3>카테고리 게시물</h3>
      <select onChange={onChange}>
        <option value='study'>스터디</option>
        <option value='music'>음악</option>
        <option value='tips'>공부꿀팁</option>
      </select>
      <ul>
        {selectCategoryData.map((item) => (
          <CategoryPostItem data={item} key={item.id} />
        ))}
      </ul>
    </ProfileCategoryPostCardWrapper>
  );
};

export default ProfileCategoryPostCard;
