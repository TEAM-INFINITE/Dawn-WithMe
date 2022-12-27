import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryDetailFeed from '../../organisms/CategoryDetailFeed/CategoryDetailFeed';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryDetailTemplateWrapper from './styled';

const CategoryDetailTemplate = ({ detailData }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <CategoryDetailTemplateWrapper>
          <CategoryDetailFeed data={detailData} />
        </CategoryDetailTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default CategoryDetailTemplate;
