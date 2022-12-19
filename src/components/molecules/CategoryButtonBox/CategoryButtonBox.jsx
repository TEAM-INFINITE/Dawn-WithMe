import CategoryButton from '../../atoms/Button/CategoryButton/CategoryButton';
import CategoryBoxWrapper from './styled';

const CategoryButtonBox = ({ onClickCategory }) => {
  return (
    <CategoryBoxWrapper>
      <CategoryButton
        width='100%'
        onClick={() => {
          onClickCategory('study');
        }}
      >
        최상단 카테고리하하
      </CategoryButton>
      <CategoryButton
        width='calc(50% - 12px)'
        onClick={() => {
          onClickCategory('music');
        }}
      >
        좌측 카테고리
      </CategoryButton>
      <CategoryButton
        width='calc(50% - 12px)'
        onClick={() => {
          onClickCategory('tips');
        }}
      >
        우측 카테고리
      </CategoryButton>
    </CategoryBoxWrapper>
  );
};

export default CategoryButtonBox;
