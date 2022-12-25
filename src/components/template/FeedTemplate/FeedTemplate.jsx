import { FeedWrapper } from './styled';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import searchImg from '../../../assets/images/icon-search.png';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';

const PostTemplate = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='text' more>
          감귤마켓 피드
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          <ul>
            {/* map으로 실행 */}
            <FeedCard />
            <FeedCard />
          </ul>
        </FeedWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default PostTemplate;
