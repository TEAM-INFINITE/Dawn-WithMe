import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import getCategoryDetail from '../../api/category/getCategoryDetail';

import CategoryDetailTemplate from '../../components/template/CategoryDetailTemplate/CategoryDetailTemplate';

const CategoryDetailPage = () => {
  const { id } = useParams();
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery(['categoryDetail', id], () => getCategoryDetail(id));

  if (isLoading) return <p>로딩</p>;
  if (isError) return <p>에러</p>;

  const { product } = detailData;

  return <CategoryDetailTemplate detailData={product} />;
};

export default CategoryDetailPage;
