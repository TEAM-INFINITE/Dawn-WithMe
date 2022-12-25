import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import MyProfileTemplateWrapper from './styled';

const MyProfileTemplate = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <MyProfileTemplateWrapper>zz</MyProfileTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default MyProfileTemplate;
