import styled, { css } from 'styled-components';

const FeedImgBoxWrapper = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 30px;
  bottom: 30px;
  ${({ theme }) => {
    return css`
      p {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.smallMid};
        margin-bottom: 18px;
      }

      input {
        display: none;
      }
    `;
  }}
`;

export const ImgBackground = styled.div`
  background: ${({ backBg }) => (backBg ? `url(${backBg})` : '#f2f2f2')};
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  border-radius: 12px;
  position: relative;
`;

export default FeedImgBoxWrapper;
