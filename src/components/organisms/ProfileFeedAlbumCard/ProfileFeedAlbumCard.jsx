import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import ProfileFeedAlbumCardWrapper from './styled';

const ProfileFeedAlbumCard = ({ postData }) => {
  return (
    <ProfileFeedAlbumCardWrapper>
      {postData.map((item) => {
        if (item.image) {
          return (
            <li key={item.id}>
              <Link to={`/feeddetail/${item.id}`}>
                {item.image.split(',').length > 1 ? (
                  <Img src={item.image.split(',')[0]} />
                ) : (
                  <Img src={item.image} />
                )}
              </Link>
            </li>
          );
        }
        return null;
      })}
    </ProfileFeedAlbumCardWrapper>
  );
};

export default ProfileFeedAlbumCard;
