import FeedCard from '../FeedCard/FeedCard';
import ProfileFeedListCardWrapper from './styled';

const ProfileFeedListCard = ({ postData, onClickDeletePost }) => {
  return (
    <ProfileFeedListCardWrapper>
      {postData.map((item) => (
        <FeedCard
          key={item.id}
          data={item}
          postId={item.id}
          onClickDeletePost={onClickDeletePost}
        />
      ))}
    </ProfileFeedListCardWrapper>
  );
};

export default ProfileFeedListCard;
