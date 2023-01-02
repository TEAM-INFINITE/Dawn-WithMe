import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import getFollowingList from '../../api/follow/getFollowingList';
import getFollowingProduct from '../../api/follow/getFollowingProduct';
import HomeTemplate from '../../components/template/HomeTemplate/HomeTemplate';

const HomePage = () => {
  const accountName = localStorage.getItem('accountname');
  const navigate = useNavigate();
  const {
    data,
    isLoading: isFollowingListLoading,
    isError: isFollowingListError,
  } = useQuery('followingList', () => getFollowingList(accountName), {});
  const followingList = data?.map((user) => user.accountname);
  const {
    data: categoryPostData,
    isLoading: isFollowingProductListLoading,
    isError,
  } = useQuery(
    'followingProductList',
    () => getFollowingProduct(followingList),
    {
      enabled: !!followingList,
    },
  );
  const isLoading = isFollowingListLoading || isFollowingProductListLoading;

  if (isError) return <p>에러 발생!</p>;
  if (isFollowingListError) return <p>에러</p>;

  const onClickCategory = (category) => {
    const filterPostData = categoryPostData.filter(
      (item) => item.itemName === category,
    );

    navigate(`/category/${category}`, {
      state: {
        data: [...filterPostData],
      },
    });
  };

  return (
    <HomeTemplate onClickCategory={onClickCategory} isLoading={isLoading} />
  );
};

export default HomePage;
