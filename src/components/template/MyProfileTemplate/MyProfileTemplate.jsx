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
import NewModal from '../../molecules/NewModal/NewModal';
import NewAlertModal from '../../molecules/NewAlertModal/NewAlertModal';

const MyProfileTemplate = ({
  profileData,
  postData,
  selectCategoryData,
  onChangeSelectBoxHandler,
  onClickShowTypeChange,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
  postShowType,
  isLoading,
  isError,
  modal,
  alerts,
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
                  onClickMoreHandler={onClickMoreHandler}
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
      {modal.isActive.post && (
        <NewModal onClickModalListHandler={onClickModalListHandler} />
      )}
      {alerts.isActive.post && (
        <NewAlertModal onClickAlertEventHandler={onClickAlertEventHandler} />
      )}
    </>
  );
};

export default MyProfileTemplate;
