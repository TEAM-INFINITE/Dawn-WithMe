import IBubbleCard from '../../organisms/ChatBubbleCard/IBubbleCard/IBubbleCard';
import YouBubbleCard from '../../organisms/ChatBubbleCard/YouBubbleCard/YouBubbleCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import ChatInput from '../../organisms/ChatInput/ChatInput';
import ChatUserWrapper from './styled';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import Img from '../../atoms/Img/Img';
import imgBoard from '../../../assets/images/img-board.jpeg';

const ChatUserTemplate = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' text='text' more>
          {/* {username} */}
          김부엉
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <ChatUserWrapper>
          <YouBubbleCard time='12:39'>
            부엉부엉부엉부엉부엉부엉부엉부엉부엉부엉부엉부엉부엉이부어어어어어엉이부엉부엉부엉부엉부엉
          </YouBubbleCard>
          <YouBubbleCard time='12:40'>안녕하세요! 김부엉입니다.</YouBubbleCard>
          <YouBubbleCard time='12:40'>우리 같이 공부해요 😀</YouBubbleCard>
          <IBubbleCard time='12:53'>
            김부엉님, 안녕하세요~ 함께 공부해요!
          </IBubbleCard>
          <Img
            className='set-image-bubble'
            src={imgBoard}
            width='240px'
            alt=''
          />
        </ChatUserWrapper>
        <ChatInput />
      </MainWrapper>
    </>
  );
};

export default ChatUserTemplate;
