import CategoryButton from '../../atoms/Button/CategoryButton/CategoryButton';
import CategoryBoxWrapper from './styled';

const CategoryButtonBox = () => {
  return (
    <CategoryBoxWrapper>
      <CategoryButton width='100%'>최상단 카테고리하하</CategoryButton>
      <CategoryButton width='calc(50% - 12px)'>좌측 카테고리</CategoryButton>
      <CategoryButton width='calc(50% - 12px)'>우측 카테고리</CategoryButton>
    </CategoryBoxWrapper>
  );
};

export default CategoryButtonBox;
