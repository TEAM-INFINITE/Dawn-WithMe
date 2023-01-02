import { FeedWrapper } from './styled';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import PostMenu from '../../molecules/PostMenu/PostMenu';

const FeedTemplate = ({ posts, onClickDeletePost, onClickReportPost }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar text='text' search>
          자유게시판 피드
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          <ul>
            {/* map으로 실행 */}
            {posts.map((item) => {
              return (
                <FeedCard
                  data={item}
                  postId={item.id}
                  key={item.id}
                  onClickDeletePost={onClickDeletePost}
                  onClickReportPost={onClickReportPost}
                />
              );
            })}
          </ul>
          <PostMenu postPath='/feed/upload' />
        </FeedWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default FeedTemplate;
