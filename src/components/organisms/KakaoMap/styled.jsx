import styled, { css } from 'styled-components';

const KakaoMapWrapper = styled.div`
  padding: 0 27px;

  ${({ theme }) => {
    return css`
      p {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.xxl};
        margin-bottom: 20px;
      }
    `;
  }}
`;

export default KakaoMapWrapper;
