import FeedText from '../../atoms/P/Feed/FeedText';
import UserCommentProfileMore from '../../molecules/UserProfile/UserCommentProfileMore';
import CommentListWrapper from './styled';

const CommentList = ({ data }) => {
  return (
    <CommentListWrapper>
      <UserCommentProfileMore data={data} />
      <FeedText className='commentText'>{data.content}</FeedText>
    </CommentListWrapper>
  );
};

export default CommentList;
