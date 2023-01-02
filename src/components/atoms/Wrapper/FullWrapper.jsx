import styled from 'styled-components';

const MainWrapper = styled.main`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
`;

export default MainWrapper;
