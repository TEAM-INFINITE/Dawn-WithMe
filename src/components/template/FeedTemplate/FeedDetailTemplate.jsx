import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CommentInput from '../../molecules/CommentInput/CommentInput';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CommentList from '../../organisms/CommentList/CommentList';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { FeedWrapper } from './styled';

const FeedDetailTemplate = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  inputText,
  error,
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
          <FeedCard data={post} />
          {/* map으로 실행 */}

          {commentList
            .map((item) => {
              return <CommentList data={item} key={item.id} />;
            })
            .reverse()}
        </FeedWrapper>
        {/* 내 이미지로 변경해야함 */}
        <CommentInput
          src={user.image}
          onChangeInputHandler={onChangeInputHandler}
          onSubmitButtonHandler={onSubmitButtonHandler}
          inputText={inputText}
          error={error}
        />
      </MainWrapper>
    </>
  );
};

export default FeedDetailTemplate;
