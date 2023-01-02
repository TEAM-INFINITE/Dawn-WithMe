import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import FollowListCard from '../../organisms/FollowListCard/FollowListCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import FollowersTemplateWrapper from './styled';

const FollowersTemplate = ({
  followersData,
  onClickFollowToggle,
  isLoading,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' text='text' more>
          Followers
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FollowersTemplateWrapper>
          <h2 className='hidden'>팔로워 페이지</h2>
          {!isLoading && (
            <FollowListCard
              followData={followersData}
              onClickFollowToggle={onClickFollowToggle}
            />
          )}
          {isLoading && <LoadingSpinner />}
        </FollowersTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default FollowersTemplate;
