import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryTemplateWrapper from './styled';

const CategoryTemplate = ({ postListData }) => {
  return (
    <CategoryTemplateWrapper>
      <TabMenu />
    </CategoryTemplateWrapper>
  );
};

export default CategoryTemplate;
