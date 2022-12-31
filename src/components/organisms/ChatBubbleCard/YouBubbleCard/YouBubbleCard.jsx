import ChatBubbleCont from '../../../molecules/ChatBubbleCont/ChatBubbleCont';
import YouBubbleCardWrapper from './styled';
import Img from '../../../atoms/Img/Img';
import profileLogo from '../../../../assets/images/profile-logo.png';

const YouBubbleCard = ({ children, time }) => {
  return (
    <YouBubbleCardWrapper>
      <Img src={profileLogo} width='42px' alt='프로필이미지' />
      <div>
        {/* <span type='username' /> */}
        <ChatBubbleCont user='yoububble' time={time}>
          {children}
        </ChatBubbleCont>
      </div>
    </YouBubbleCardWrapper>
  );
};

export default YouBubbleCard;
