import styled, { css } from 'styled-components';

const ProfileFeedAlbumCardWrapper = styled.ul`
  margin-bottom: 90px;
  padding: 16px 16px 0 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 33.33%));
  grid-gap: 6px;
  /* grid-template-rows: 1fr 1fr 1fr; */

  ${({ theme }) => {
    return css`
      border-top: 1px solid ${theme.colors.colorBorder};
    `;
  }}
  li {
    height: 180px;
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }

  ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(auto, auto));
    li {
      height: 150px;
      img {
        height: 150px;
      }
    }
  }
  ${({ theme }) => theme.device.mobileMid} {
    li {
      height: 120px;
      img {
        height: 120px;
      }
    }
  }
  ${({ theme }) => theme.device.mobile} {
    li {
      height: 90px;
      img {
        height: 90px;
      }
    }
  }
`;

export default ProfileFeedAlbumCardWrapper;
