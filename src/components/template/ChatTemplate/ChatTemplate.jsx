import { Link } from 'react-router-dom';
import ChatUserCard from '../../molecules/ChatUserCard/ChatUserCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import ChatWrapper from './styled';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';

const ChatTemplate = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <ChatWrapper>
          <ol>
            <Link to='/chatdetail'>
              <ChatUserCard
                status='alarm'
                username='김부엉'
                preview='사진'
                cont='22.12.30'
              />
            </Link>
            <ChatUserCard
              status='alarm'
              username='김만득'
              preview='코딩 10시간 성공! 수고하셨습니다'
              cont='22.12.25'
            />
            <ChatUserCard
              username='아산의짱'
              preview='오늘부터 아산의 공부짱은 접니다.'
              cont='22.12.24'
            />
            <ChatUserCard
              username='10정만점의열정'
              preview='화이팅~'
              cont='22.12.20'
            />
          </ol>
        </ChatWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default ChatTemplate;
