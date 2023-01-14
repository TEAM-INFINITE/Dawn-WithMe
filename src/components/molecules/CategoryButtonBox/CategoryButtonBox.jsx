import Img from '../../atoms/Img/Img';
import CategoryBoxWrapper from './styled';
import musicImg from '../../../assets/images/category-music.png';
import studyImg from '../../../assets/images/category-study.png';
import tipsImg from '../../../assets/images/category-tips.png';

const CategoryButtonBox = ({ onClickCategory }) => {
  return (
    <CategoryBoxWrapper>
      <button
        type='button'
        onClick={() => {
          onClickCategory('study');
        }}
      >
        <Img src={studyImg} />
      </button>
      <button
        type='button'
        onClick={() => {
          onClickCategory('music');
        }}
      >
        <Img src={musicImg} />
      </button>
      <button
        type='button'
        onClick={() => {
          onClickCategory('tips');
        }}
      >
        <Img src={tipsImg} />
      </button>
    </CategoryBoxWrapper>
  );
};

export default CategoryButtonBox;
