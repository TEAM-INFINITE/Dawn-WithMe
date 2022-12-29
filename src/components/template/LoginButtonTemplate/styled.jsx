import styled from 'styled-components';
import LoginButtonBackground from '../../../assets/images/login-button-background.png';

const LoginButtonWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  background: no-repeat url(${LoginButtonBackground});
  background-size: 100%;
  margin: 0 auto;
  // position: relative;
  overflow: auto;

  .moon {
    width: 16px;
    height: 22px;
    border-radius: 41% 59% 100% 0% / 0% 34% 66% 100%;
    top: 375px;
    left: 247px;
    animation: none;
  }

  /* position: relative;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  background: no-repeat url(${LoginButtonBackground});
  background-size: 100%; */
`;

export default LoginButtonWrapper;
