import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import ProfileCategoryPostCard from '../../organisms/ProfileCategoryPostCard/ProfileCategoryPostCard';
import ProfileInfoCard from '../../organisms/ProfileInfoCard/ProfileInfoCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import MyProfileTemplateWrapper from './styled';
import ProfileFeedShowSelectBox from '../../molecules/ProfileFeedShowSelectBox/ProfileFeedShowSelectBox';
import ProfileFeedListCard from '../../organisms/ProfileFeedListCard/ProfileFeedListCard';
import ProfileFeedAlbumCard from '../../organisms/ProfileFeedAlbumCard/ProfileFeedAlbumCard';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';

const MyProfileTemplate = ({
  profileData,
  postData,
  selectCategoryData,
  onChangeSelectBoxHandler,
  onClickShowTypeChange,
  postShowType,
  onClickDeletePost,
  isLoading,
  isError,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <MyProfileTemplateWrapper>
          <h2 className='hidden'>내 프로필</h2>
          {!isLoading && !isError && (
            <>
              <ProfileInfoCard profileData={profileData} />
              <ProfileCategoryPostCard
                onChange={onChangeSelectBoxHandler}
                selectCategoryData={selectCategoryData}
              />
              <ProfileFeedShowSelectBox
                onClickShowTypeChange={onClickShowTypeChange}
                postShowType={postShowType}
              />
              {postShowType === 'list' && (
                <ProfileFeedListCard
                  postData={postData.post}
                  onClickDeletePost={onClickDeletePost}
                />
              )}
              {postShowType === 'album' && (
                <ProfileFeedAlbumCard postData={postData.post} />
              )}
            </>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </MyProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default MyProfileTemplate;
