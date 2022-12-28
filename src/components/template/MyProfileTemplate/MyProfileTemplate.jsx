import { Link } from 'react-router-dom';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import ProfileCategoryPostCard from '../../organisms/ProfileCategoryPostCard/ProfileCategoryPostCard';
import ProfileInfoCard from '../../organisms/ProfileInfoCard/ProfileInfoCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import MyProfileTemplateWrapper, {
  MyProfileAlbumFeedWrapper,
  MyProfileFeedShowSelectWrapper,
  MyProfileListFeedWrapper,
} from './styled';
import Img from '../../atoms/Img/Img';
import postListIcon from '../../../assets/images/icon-post-list-off.png';
import postListOnIcon from '../../../assets/images/icon-post-list-on.png';
import postAlbumIcon from '../../../assets/images/icon-post-album-off.png';
import postAlbumOnIcon from '../../../assets/images/icon-post-album-on.png';

const MyProfileTemplate = ({
  profileData,
  postData,
  selectCategoryData,
  onChangeSelectBoxHandler,
  onClickShowTypeChange,
  PostShowType,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <MyProfileTemplateWrapper>
          <h2 className='hidden'>내 프로필</h2>
          <ProfileInfoCard profileData={profileData} />
          <ProfileCategoryPostCard
            onChange={onChangeSelectBoxHandler}
            selectCategoryData={selectCategoryData}
          />
          <MyProfileFeedShowSelectWrapper>
            <button
              type='button'
              onClick={() => {
                onClickShowTypeChange('list');
              }}
            >
              <Img
                src={PostShowType === 'list' ? postListOnIcon : postListIcon}
              />
            </button>
            <button
              type='button'
              onClick={() => {
                onClickShowTypeChange('album');
              }}
            >
              <Img
                src={PostShowType === 'album' ? postAlbumOnIcon : postAlbumIcon}
              />
            </button>
          </MyProfileFeedShowSelectWrapper>
          {PostShowType === 'list' && (
            <MyProfileListFeedWrapper>
              {postData.map((item) => (
                <FeedCard key={item.id} data={item} />
              ))}
            </MyProfileListFeedWrapper>
          )}
          {PostShowType === 'album' && (
            <MyProfileAlbumFeedWrapper>
              {postData.map((item) => (
                <li key={item.id}>
                  <Link to={`/feeddetail/${item.id}`}>
                    {item.image.split(', ').length > 1 ? (
                      <Img src={item.image.split(', ')[0]} />
                    ) : (
                      <Img src={item.image} />
                    )}
                  </Link>
                </li>
              ))}
            </MyProfileAlbumFeedWrapper>
          )}
        </MyProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default MyProfileTemplate;
