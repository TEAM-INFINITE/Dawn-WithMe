import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryFeedCard from '../../organisms/CategoryFeedCard/CategoryFeedCard';
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
          <ul>
            {postListData.map((item) => (
              <CategoryFeedCard data={item} key={item.id} />
            ))}
          </ul>
        </CategoryTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default CategoryTemplate;
