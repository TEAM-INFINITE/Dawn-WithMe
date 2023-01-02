import styled from 'styled-components';

const CategoryUserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: fill;
  }
`;

export default CategoryUserProfileWrapper;
