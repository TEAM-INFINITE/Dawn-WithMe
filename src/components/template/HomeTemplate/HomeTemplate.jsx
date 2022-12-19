import CategoryButtonBox from '../../molecules/CategoryButtonBox/CategoryButtonBox';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HomeTemplateWrapper from './styled';

const HomeTemplate = ({ onClickCategory }) => {
  return (
    <HomeTemplateWrapper>
      <CategoryButtonBox onClickCategory={onClickCategory} />
      <TabMenu />
    </HomeTemplateWrapper>
  );
};

export default HomeTemplate;
