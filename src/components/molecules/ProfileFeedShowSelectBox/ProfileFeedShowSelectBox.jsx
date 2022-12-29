import MyProfileFeedShowSelectBoxWrapper from './styled';
import postListIcon from '../../../assets/images/icon-post-list-off.png';
import postListOnIcon from '../../../assets/images/icon-post-list-on.png';
import postAlbumIcon from '../../../assets/images/icon-post-album-off.png';
import postAlbumOnIcon from '../../../assets/images/icon-post-album-on.png';
import Img from '../../atoms/Img/Img';

const ProfileFeedShowSelectBox = ({ onClickShowTypeChange, postShowType }) => {
  return (
    <MyProfileFeedShowSelectBoxWrapper>
      <button
        type='button'
        onClick={() => {
          onClickShowTypeChange('list');
        }}
      >
        <Img src={postShowType === 'list' ? postListOnIcon : postListIcon} />
      </button>
      <button
        type='button'
        onClick={() => {
          onClickShowTypeChange('album');
        }}
      >
        <Img src={postShowType === 'album' ? postAlbumOnIcon : postAlbumIcon} />
      </button>
    </MyProfileFeedShowSelectBoxWrapper>
  );
};

export default ProfileFeedShowSelectBox;
