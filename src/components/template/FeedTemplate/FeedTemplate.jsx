import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FeedWrapper } from './styled';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import getFollowFeedDeatail from '../../../api/feed/getFollowFeedDetail';

const PostTemplate = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useQuery(['detailfeed', id], () => {
    return getFollowFeedDeatail(id);
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  console.log(data);
  const { posts } = data;
  console.log(posts);
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
            {posts.map((item) => {
              return <FeedCard data={item} key={item.id} />;
            })}
          </ul>
        </FeedWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default PostTemplate;
