import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import ProfileInfoCard from '../../organisms/ProfileInfoCard/ProfileInfoCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import MyProfileTemplateWrapper from './styled';

const MyProfileTemplate = ({ data }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <MyProfileTemplateWrapper>
          <ProfileInfoCard data={data} />
        </MyProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default MyProfileTemplate;
