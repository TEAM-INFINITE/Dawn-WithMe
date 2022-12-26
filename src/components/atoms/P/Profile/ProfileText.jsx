import styled from 'styled-components';

const ProfileText = styled.p`
  color: ${({ fontColor }) => fontColor || 'white'};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => lineHeight || '23px'};
`;

export default ProfileText;
