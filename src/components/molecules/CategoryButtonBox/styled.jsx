import styled from 'styled-components';
import musicImg from '../../../assets/images/category-music.png';
import studyImg from '../../../assets/images/category-study.png';
import tipsImg from '../../../assets/images/category-tips.png';
import mapImg from '../../../assets/images/category-map.png';

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
    &:nth-child(4) {
      background: url(${mapImg});
      height: 300px;
      background-size: cover;
      background-position: center;
    }
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default CategoryBoxWrapper;
