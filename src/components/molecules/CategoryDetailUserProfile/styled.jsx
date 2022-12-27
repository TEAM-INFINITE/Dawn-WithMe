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
    }
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
