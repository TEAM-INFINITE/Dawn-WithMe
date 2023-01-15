import FeedCard from '../FeedCard/FeedCard';
import ProfileFeedListCardWrapper from './styled';

const ProfileFeedListCard = ({ postData, onClickMoreHandler }) => {
  return (
    <ProfileFeedListCardWrapper>
      {postData.map((item) => (
        <FeedCard
          key={item.id}
          data={item}
          postId={item.id}
          onClickMoreHandler={onClickMoreHandler}
        />
      ))}
    </ProfileFeedListCardWrapper>
  );
};

export default ProfileFeedListCard;
