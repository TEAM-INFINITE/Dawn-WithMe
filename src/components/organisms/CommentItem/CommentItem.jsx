import FeedText from '../../atoms/P/Feed/FeedText';
import UserCommentProfileMore from '../../molecules/UserProfile/UserCommentProfileMore';
import CommentItemWrapper from './styled';

const CommentItem = ({ data }) => {
  return (
    <CommentItemWrapper>
      <UserCommentProfileMore data={data} />
      <FeedText className='commentText'>{data.content}</FeedText>
    </CommentItemWrapper>
  );
};

export default CommentItem;
