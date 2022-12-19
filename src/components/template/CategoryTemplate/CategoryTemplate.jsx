import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryTemplateWrapper from './styled';

const CategoryTemplate = ({ postListData }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <CategoryTemplateWrapper>
          <TabMenu />
        </CategoryTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default CategoryTemplate;
