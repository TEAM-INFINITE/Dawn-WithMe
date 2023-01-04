import styled from 'styled-components';

const CategoryUserProfileMoreWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;

  a {
    &:nth-child(1) {
      margin-right: auto;
    }
  }
  button {
    height: 18px;
    margin-left: 12px;
  }
`;

export default CategoryUserProfileMoreWrapper;
