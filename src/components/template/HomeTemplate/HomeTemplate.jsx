import CategoryButtonBox from '../../molecules/CategoryButtonBox/CategoryButtonBox';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HomeTemplateWrapper from './styled';

const HomeTemplate = () => {
  return (
    <HomeTemplateWrapper>
      <CategoryButtonBox />
      <TabMenu />
    </HomeTemplateWrapper>
  );
};

export default HomeTemplate;
