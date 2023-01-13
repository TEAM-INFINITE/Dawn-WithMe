import styled, { css } from 'styled-components';

const KakaoMapWrapper = styled.div`
  padding-top: 30px;
  ${({ theme }) => {
    return css`
      p {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.xxl};
        margin-bottom: 20px;
      }
    `;
  }}

  #react-kakao-maps-sdk-map-container {
    width: 100%;
    height: 200px;
  }
`;

export default KakaoMapWrapper;
