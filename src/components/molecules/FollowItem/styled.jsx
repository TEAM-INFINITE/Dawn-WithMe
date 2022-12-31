import styled, { css } from 'styled-components';

const FollowItemWrapper = styled.li`
  display: flex;
  align-items: center;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
    ${({ theme }) => {
      return css`
        color: ${theme.colors.colorWhite};
        div {
          width: 70%;
          p {
            width: 100%;
            margin-left: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            &:first-child {
              font-size: ${theme.fontSizes.base};
              margin-bottom: 6px;
            }
            &:last-child {
              font-size: ${theme.fontSizes.smallMid};
              color: ${theme.colors.colorBorder};
            }
          }
        }
      `;
    }}
    img {
      width: 50px;
      height: 50px;
      object-fit: fill;
      border-radius: 50%;
    }
  }
  button {
    width: 56px;
    height: 28px;
    margin-left: auto;
  }
`;
export default FollowItemWrapper;
