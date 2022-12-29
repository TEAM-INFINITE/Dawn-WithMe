import ChatBubbleCont from '../../../molecules/ChatBubbleCont/ChatBubbleCont';
import IBubbleCardWrapper from './styled';

const IBubbleCard = ({ children, time }) => {
  return (
    <IBubbleCardWrapper>
      <div>
        <ChatBubbleCont user='ibubble' time={time}>
          {children}
        </ChatBubbleCont>
      </div>
    </IBubbleCardWrapper>
  );
};

export default IBubbleCard;
