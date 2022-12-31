import styled from 'styled-components';

const MyCategoryPostItemWrapper = styled.li`
  img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    width: 130px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 6px;
    text-align: left;
    &:last-child {
      margin-top: 4px;
    }
  }
`;

export default MyCategoryPostItemWrapper;
