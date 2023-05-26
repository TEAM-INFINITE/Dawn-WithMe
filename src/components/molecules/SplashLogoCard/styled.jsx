import styled from 'styled-components';

const SplashLogoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 10vh;
  margin: 3% 30%;

  img:nth-child(2) {
    padding-top: 15%;
  }

  .moon {
    height: 7%;
    width: 6%;
    background: rgb(223, 208, 172);
    border-radius: 41% 59% 100% 0 / 0 34% 66% 100%;
    bottom: 15%;
    left: 28%;
    animation: none;
  }
`;

export default SplashLogoCardWrapper;
