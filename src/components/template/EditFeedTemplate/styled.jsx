import styled, { css } from 'styled-components';
import deleteBtn from '../../../assets/images/icon-delete.png';

export const FeedUploadWrapper = styled.div`
  img {
    border-radius: 50%;
  }

  ${({ theme }) => {
    return css`
      display: flex;
      max-width: 600px;
      height: 100%;
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      padding: 20px 16px 90px;
      position: relative;
      overflow: auto;
    `;
  }}
`;

export const FeedTextWrapper = styled.div`
  width: 100%;

  .priview-img {
    object-fit: cover;
    margin: 5px;
    width: 200px;
    height: 130px;
    border-radius: 10px;
  }
`;

export const ImgWrapper = styled.div`
  width: 526px;

  ul {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    gap: 8px;
  }

  li {
    position: relative;
  }
`;
export const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 6px;
  top: 6px;
  background-image: url(${deleteBtn});
`;

export default FeedUploadWrapper;
