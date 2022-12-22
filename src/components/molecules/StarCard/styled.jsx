import styled from 'styled-components';

const StarCardWrapper = styled.div`
  span {
    &:nth-child(1) {
      left: 80px;
      top: 130px;
    }
    &:nth-child(2) {
      left: 130px;
      top: 340px;
    }
    &:nth-child(3) {
      right: 80px;
      top: 400px;
    }
    &:nth-child(4) {
      right: 90px;
      top: 50px;
    }
    &:nth-child(5) {
      right: 150px;
      top: 170px;
    }
  }
`;

export default StarCardWrapper;
