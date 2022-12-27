import FeedText from '../../atoms/P/Feed/FeedText';
import UserCommentProfileMore from '../../molecules/UserProfile/UserCommentProfileMore';
import CommentItemWrapper from './styled';

const CommentItem = ({
  id,
  accountName,
  text,
  src,
  userName,
  time,
  handleDelete,
}) => {
  return (
    <CommentItemWrapper>
      <UserCommentProfileMore
        id={id}
        accountName={accountName}
        src={src}
        userName={userName}
        time={time}
        handleDelete={handleDelete}
      />
      <FeedText className='commentText'>{text}</FeedText>
    </CommentItemWrapper>
  );
};

export default CommentItem;
