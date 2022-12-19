import { FeedWrapper } from './styled';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import searchImg from '../../../assets/images/icon-search.png';
import TabMenu from '../../organisms/TabMenu/TabMenu';

const PostTemplate = () => {
  return (
    <FeedWrapper>
      <TopNavBar src={searchImg}>감귤마켓 피드</TopNavBar>
      <ul>
        {/* map으로 실행 */}
        <FeedCard />
        <FeedCard />
      </ul>
      <TabMenu />
    </FeedWrapper>
  );
};

export default PostTemplate;
