import styled from 'styled-components';

const ModeToggleWrapper = styled.article`
  button {
    width: 50px;
    height: 50px;
    font-size: 12px;
    border-radius: 25px;
    transition: 0.5s;
    transform: translateY(0);

    background-color: ${(props) => props.BACKGROUND};
    color: ${(props) => props.colorMode};

    position: absolute;
  }
`;

export default ModeToggleWrapper;
