import styled from 'styled-components';
import musicImg from '../../../assets/images/category-music.png';
import studyImg from '../../../assets/images/category-study.png';
import tipsImg from '../../../assets/images/category-tips.png';

const CategoryBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 30px 27px;

  button {
    &:nth-child(1) {
      background: url(${studyImg});
    }
    &:nth-child(2) {
      background: url(${musicImg});
    }
    &:nth-child(3) {
      background: url(${tipsImg});
    }
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default CategoryBoxWrapper;
