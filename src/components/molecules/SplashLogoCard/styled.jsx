import styled from 'styled-components';

const SplashLogoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10vh;
  margin: 0 30%;

  img:nth-child(2) {
    padding-top: 18%;
  }

  .moon {
    height: 9%;
    width: 8%;
    background: rgb(223, 208, 172);
    border-radius: 41% 59% 100% 0 / 0 34% 66% 100%;
    position: absolute;
    top: 77%;
    left: 23%;
    animation: none;
  }
`;

export default SplashLogoCardWrapper;
