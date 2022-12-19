import { useLocation } from 'react-router-dom';
import CategoryTemplate from '../../components/template/CategoryTemplate/CategoryTemplate';

const CategoryPage = () => {
  const location = useLocation();
  const postListData = location.state.data;

  return <CategoryTemplate postListData={postListData} />;
};

export default CategoryPage;