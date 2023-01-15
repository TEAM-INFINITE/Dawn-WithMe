import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CommentInput from '../../molecules/CommentInput/CommentInput';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import Alert from '../../molecules/Alert/Alert';
import Modal from '../../molecules/Modal/Modal';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CommentItem from '../../organisms/CommentItem/CommentItem';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { CommentListWrapper, FeedWrapper } from './styled';

const FeedDetailTemplate = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
  onClickCommentMoreHandler,
  inputText,
  commentList,
  post,
  user,
  isLoading,
  isError,
  alerts,
  modal,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more accountname={user?.accountname} />
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          {!isLoading && !isError && (
            <>
              <FeedCard
                data={post}
                commentList={commentList}
                postId={post.id}
                onClickMoreHandler={onClickMoreHandler}
              />
              <CommentListWrapper>
                {commentList
                  .map((item) => {
                    return (
                      <CommentItem
                        data={item}
                        postId={post.id}
                        key={item.id}
                        onClickCommentMoreHandler={onClickCommentMoreHandler}
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
      {(modal.isActive.post || modal.isActive.comment) && (
        <Modal onClickModalListHandler={onClickModalListHandler} />
      )}
      {(alerts.isActive.post || alerts.isActive.comment) && (
        <Alert onClickAlertEventHandler={onClickAlertEventHandler} />
      )}
    </>
  );
};

export default FeedDetailTemplate;
