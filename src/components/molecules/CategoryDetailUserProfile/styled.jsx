import styled from 'styled-components';

const CategoryDetailUserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  .profile-btn {
    display: flex;
    align-items: center;

    img {
      margin-right: 13px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: fill;
    }
  }
  a {
    &:nth-child(1) {
      margin-right: auto;
    }
  }
  button {
    height: 18px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .chat-btn {
    margin-left: auto;
  }
`;

export default CategoryDetailUserProfileWrapper;
