import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import FollowListCard from '../../organisms/FollowListCard/FollowListCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import FollowersTemplateWrapper from './styled';

const FollowingsTemplate = ({
  followingsData,
  onClickFollowToggle,
  isLoading,
  isError,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' text='text' more>
          Followings
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FollowersTemplateWrapper>
          <h2 className='hidden'>팔로워 페이지</h2>
          {!isLoading && !isError && (
            <FollowListCard
              followData={followingsData}
              onClickFollowToggle={onClickFollowToggle}
            />
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </FollowersTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default FollowingsTemplate;
