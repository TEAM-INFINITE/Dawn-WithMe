import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CommentInput from '../../molecules/CommentInput/CommentInput';
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
  onClickModal,
  handleDelete,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <FeedWrapper>
          <FeedCard
            data={post}
            commentList={commentList}
            onClickModal={onClickModal}
          />
          {/* map으로 실행 */}
          <CommentListWrapper>
            {commentList
              .map((item) => {
                return (
                  <CommentItem
                    id={item.id}
                    key={item.id}
                    accountName={item.author.accountname}
                    text={item.content}
                    src={item.author.image}
                    userName={item.author.username}
                    time={item.createdAt}
                    handleDelete={handleDelete}
                  />
                );
              })
              .reverse()}
          </CommentListWrapper>
        </FeedWrapper>
        {/* 내 이미지로 변경해야함 */}
        <CommentInput
          src={user.image}
          onChangeInputHandler={onChangeInputHandler}
          onSubmitButtonHandler={onSubmitButtonHandler}
          inputText={inputText}
        />
      </MainWrapper>
    </>
  );
};

export default FeedDetailTemplate;
