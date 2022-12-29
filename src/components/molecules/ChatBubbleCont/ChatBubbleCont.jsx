import ChatBubble from '../../atoms/Span/ChatText';
import ChatBubbleContWrapper from './styled';

const ChatBubbleCont = ({ user, children, time }) => {
  return (
    <ChatBubbleContWrapper>
      <ChatBubble user={user}>{children}</ChatBubble>
      <span className='time'>{time}</span>
    </ChatBubbleContWrapper>
  );
};

export default ChatBubbleCont;
