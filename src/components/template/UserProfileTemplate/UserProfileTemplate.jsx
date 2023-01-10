import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import UserProfileTemplateWrapper from './styled';
import ProfileInfoCard from '../../organisms/ProfileInfoCard/ProfileInfoCard';
import ProfileCategoryPostCard from '../../organisms/ProfileCategoryPostCard/ProfileCategoryPostCard';
import ProfileFeedShowSelectBox from '../../molecules/ProfileFeedShowSelectBox/ProfileFeedShowSelectBox';
import ProfileFeedListCard from '../../organisms/ProfileFeedListCard/ProfileFeedListCard';
import ProfileFeedAlbumCard from '../../organisms/ProfileFeedAlbumCard/ProfileFeedAlbumCard';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';

const UserProfileTemplate = ({
  profileData,
  isFollow,
  followCount,
  selectCategoryData,
  postShowType,
  onClickFollowToggle,
  onChangeSelectBoxHandler,
  onClickShowTypeChange,
  postData,
  isLoading,
  isError,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <UserProfileTemplateWrapper>
          <h2 className='hidden'>유저 프로필</h2>
          {!isLoading && !isError && (
            <>
              <ProfileInfoCard
                profileData={profileData}
                isFollow={isFollow}
                followCount={followCount}
                onClickFollowToggle={onClickFollowToggle}
              />
              <ProfileCategoryPostCard
                onChange={onChangeSelectBoxHandler}
                selectCategoryData={selectCategoryData}
              />
              <ProfileFeedShowSelectBox
                onClickShowTypeChange={onClickShowTypeChange}
                postShowType={postShowType}
              />
              {postShowType === 'list' && (
                <ProfileFeedListCard postData={postData.post} />
              )}
              {postShowType === 'album' && (
                <ProfileFeedAlbumCard postData={postData.post} />
              )}
            </>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </UserProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default UserProfileTemplate;
