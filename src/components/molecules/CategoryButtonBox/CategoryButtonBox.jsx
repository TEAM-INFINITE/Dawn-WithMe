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
        {' '}
      </CategoryButton>
      <CategoryButton
        width='calc(50% - 12px)'
        onClick={() => {
          onClickCategory('music');
        }}
      >
        {' '}
      </CategoryButton>
      <CategoryButton
        width='calc(50% - 12px)'
        onClick={() => {
          onClickCategory('tips');
        }}
      >
        {' '}
      </CategoryButton>
    </CategoryBoxWrapper>
  );
};

export default CategoryButtonBox;
