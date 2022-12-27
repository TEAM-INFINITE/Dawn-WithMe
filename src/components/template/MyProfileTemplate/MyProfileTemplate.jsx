import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import ProfileCategoryPostCard from '../../organisms/ProfileCategoryPostCard/ProfileCategoryPostCard';
import ProfileFeedCard from '../../organisms/ProfileFeedCard/ProfileFeedCard';
import ProfileInfoCard from '../../organisms/ProfileInfoCard/ProfileInfoCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import MyProfileTemplateWrapper from './styled';

const MyProfileTemplate = ({
  profileData,
  myPostData,
  selectCategoryData,
  onChangeSelectBoxHandler,
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
          {myPostData.post.map((item) => (
            <ProfileFeedCard data={item} key={item.id} />
          ))}
        </MyProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default MyProfileTemplate;
