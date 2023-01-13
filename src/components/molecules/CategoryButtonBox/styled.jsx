import styled from 'styled-components';

const CategoryBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  button {
    img {
      width: 100%;
    }

    &:nth-child(1) {
      width: 100%;
      margin-bottom: 4%;
    }
    &:nth-child(2) {
      width: 48%;
    }
    &:nth-child(3) {
      width: 48%;
    }
  }
`;

export default CategoryBoxWrapper;
