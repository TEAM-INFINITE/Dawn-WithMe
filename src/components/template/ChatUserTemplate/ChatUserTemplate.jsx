import IBubbleCard from '../../organisms/ChatBubbleCard/IBubbleCard/IBubbleCard';
import YouBubbleCard from '../../organisms/ChatBubbleCard/YouBubbleCard/YouBubbleCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import ChatInput from '../../organisms/ChatInput/ChatInput';
import ChatUserWrapper from './styled';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import Img from '../../atoms/Img/Img';
import imgBoard from '../../../assets/images/img-board.jpeg';

const ChatUserTemplate = ({
  chatValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' text='text' more>
          윤카우
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <ChatUserWrapper>
          <IBubbleCard time='12:05'>윤카우님, 안녕하세요!</IBubbleCard>
          <IBubbleCard time='12:05'>스터디 참여하고 싶부엉요😲</IBubbleCard>
          <YouBubbleCard time='12:07'>
            안녕하세요 김부엉쓰님 오랜만입니다~ 오늘은 공부 몇시간 계획하셨나요?
          </YouBubbleCard>
          <IBubbleCard time='12:08'>3시간 달려보고싶부엉요!!</IBubbleCard>
          <YouBubbleCard time='12:09'>
            네🙂 김부엉쓰님 화이팅입니다~ 공부하시고 나서, 타이머 인증
            부탁드립니다.
          </YouBubbleCard>
          <Img
            className='set-image-bubble'
            src={imgBoard}
            width='240px'
            alt=''
          />
        </ChatUserWrapper>
        <ChatInput
          chatValue={chatValue}
          onChange={onChangeInputHandler}
          onSubmit={onSubmitButtonHandler}
        />
      </MainWrapper>
    </>
  );
};

export default ChatUserTemplate;
