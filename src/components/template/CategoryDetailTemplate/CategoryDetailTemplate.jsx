import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryDetailFeed from '../../organisms/CategoryDetailFeed/CategoryDetailFeed';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryDetailTemplateWrapper from './styled';

const CategoryDetailTemplate = ({ detailData, isLoading }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <CategoryDetailTemplateWrapper>
          {!isLoading && <CategoryDetailFeed data={detailData} />}
          {isLoading && <LoadingSpinner />}
        </CategoryDetailTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default CategoryDetailTemplate;
