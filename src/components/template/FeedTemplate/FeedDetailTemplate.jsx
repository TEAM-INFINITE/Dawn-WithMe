import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CommentInput from '../../molecules/CommentInput/CommentInput';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CommentItem from '../../organisms/CommentList/CommentList';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { CommentListWrapper, FeedWrapper } from './styled';

const FeedDetailTemplate = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  inputText,
  commentList,
  post,
  user,
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
            // onClickHeartCounter={onClickHeartCounter}
          />
          {/* map으로 실행 */}
          <CommentListWrapper>
            {commentList
              .map((item) => {
                return <CommentItem data={item} key={item.id} />;
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
