import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CommentInput from '../../molecules/CommentInput/CommentInput';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CommentItem from '../../organisms/CommentItem/CommentItem';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { CommentListWrapper, FeedWrapper } from './styled';

const FeedDetailTemplate = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  inputText,
  commentList,
  post,
  user,
  onClickDeletePost,
  onClickReportPost,
  onClickDeleteComment,
  onClickReportComment,
  isLoading,
  isError,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar
          cont='back'
          more
          onClickReportComment={onClickReportComment}
          accountname={user?.accountname}
        />
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          {!isLoading && !isError && (
            <>
              <FeedCard
                data={post}
                commentList={commentList}
                postId={post.id}
                onClickDeletePost={onClickDeletePost}
                onClickReportPost={onClickReportPost}
              />
              <CommentListWrapper>
                {commentList
                  .map((item) => {
                    return (
                      <CommentItem
                        data={item}
                        postId={post.id}
                        key={item.id}
                        onClickDeleteComment={onClickDeleteComment}
                        onClickReportComment={onClickReportComment}
                      />
                    );
                  })
                  .reverse()}
              </CommentListWrapper>
            </>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </FeedWrapper>
        <CommentInput
          src={user?.image}
          onChangeInputHandler={onChangeInputHandler}
          onSubmitButtonHandler={onSubmitButtonHandler}
          inputText={inputText}
        />
      </MainWrapper>
    </>
  );
};

export default FeedDetailTemplate;
