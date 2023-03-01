import { ToastContainer } from 'react-toastify';
import { FeedWrapper } from './styled';
import 'react-toastify/dist/ReactToastify.css';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import PostMenu from '../../molecules/PostMenu/PostMenu';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import Modal from '../../molecules/Modal/Modal';
import Alert from '../../molecules/Alert/Alert';

const FeedTemplate = ({
  followpostdata,
  observer,
  onClickModalListHandler,
  onClickAlertEventHandler,
  onClickMoreHandler,
  isLoading,
  isError,
  modal,
  alerts,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar text='text' search>
          자유게시판 피드
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          {!isLoading && followpostdata.length > 0 && (
            <ul>
              {followpostdata.map((page) =>
                page.data.map((post) => {
                  return (
                    <FeedCard
                      data={post}
                      postId={post.id}
                      key={post.id}
                      onClickMoreHandler={onClickMoreHandler}
                    />
                  );
                }),
              )}
              <div ref={observer} />
            </ul>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </FeedWrapper>
        <PostMenu postPath='/feed/upload' />
        <TabMenu />
      </MainWrapper>
      {modal.isActive.post && (
        <Modal onClickModalListHandler={onClickModalListHandler} />
      )}
      {alerts.isActive.post && (
        <Alert onClickAlertEventHandler={onClickAlertEventHandler} />
      )}
    </>
  );
};

export default FeedTemplate;
