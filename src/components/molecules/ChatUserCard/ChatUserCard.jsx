import Img from '../../atoms/Img/Img';
import ChatUserCardWrapper from './styled';
import FeedText from '../../atoms/P/Feed/FeedText';
import profileLogo from '../../../assets/images/profile-logo.png';

const ChatUserCard = ({ status, username, preview, cont }) => {
  return (
    <ChatUserCardWrapper>
      <div>
        {status === 'alarm' && <span className='none-read' />}
        <Img src={profileLogo} alt='프로필 사진' width='36px' />
      </div>
      <div>
        <FeedText>{username}</FeedText>
        <p className='preview-last-chat'>{preview}</p>
      </div>
      <span className='date-last-chat'>{cont}</span>
    </ChatUserCardWrapper>
  );
};

export default ChatUserCard;
