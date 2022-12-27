import FeedText from '../../atoms/P/Feed/FeedText';
import UserCommentProfileMore from '../../molecules/UserProfile/UserCommentProfileMore';
import CommentItemWrapper from './styled';

const CommentItem = ({ data, postId, onClickDeleteComment }) => {
  const { image, accountname, username } = data.author;
  return (
    <CommentItemWrapper>
      <UserCommentProfileMore
        id={data.id}
        postId={postId}
        accountName={accountname}
        src={image}
        userName={username}
        time={data.createdAt}
        onClickDeleteComment={onClickDeleteComment}
      />
      <FeedText className='commentText'>{data.content}</FeedText>
    </CommentItemWrapper>
  );
};

export default CommentItem;
