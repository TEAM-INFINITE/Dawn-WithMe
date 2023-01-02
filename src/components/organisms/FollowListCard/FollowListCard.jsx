/* eslint-disable no-underscore-dangle */
import FollowItem from '../../molecules/FollowItem/FollowItem';
import FollowListCardWrapper from './styled';

const FollowListCard = ({ followData, onClickFollowToggle }) => {
  return (
    <FollowListCardWrapper>
      {followData.map((item) => (
        <FollowItem
          data={item}
          key={item._id}
          onClickFollowToggle={onClickFollowToggle}
        />
      ))}
    </FollowListCardWrapper>
  );
};

export default FollowListCard;
