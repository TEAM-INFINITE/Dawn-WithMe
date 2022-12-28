import FeedCard from '../FeedCard/FeedCard';
import ProfileFeedListCardWrapper from './styled';

const ProfileFeedListCard = ({ postData }) => {
  return (
    <ProfileFeedListCardWrapper>
      {postData.map((item) => (
        <FeedCard key={item.id} data={item} />
      ))}
    </ProfileFeedListCardWrapper>
  );
};

export default ProfileFeedListCard;
