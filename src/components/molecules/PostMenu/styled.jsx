import styled from 'styled-components';

const PostMenuWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  transition: 0.5s;
  button {
    height: 50px;
  }

  a {
    z-index: 80;
  }

  &.active {
    > button {
      transform: rotate(45deg);
    }

    > article {
      transform: translateY(-60px);
    }

    > :nth-child(2) {
      transform: translateY(-120px);
    }

    > :nth-child(3) {
      transform: translateY(-180px);
    }
  }
`;

export default PostMenuWrapper;
