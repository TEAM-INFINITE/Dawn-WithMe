import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import getFollowingList from '../../api/following/getFollowingList';
import getFollowingProduct from '../../api/following/getFollowingProduct';
import HomeTemplate from '../../components/template/HomeTemplate/HomeTemplate';

const HomePage = () => {
  const accountName = localStorage.getItem('accountname');
  const navigate = useNavigate();
  const { data } = useQuery('followingList', () =>
    getFollowingList(accountName),
  );
  const followingList = data?.map((user) => user.accountname);

  const {
    data: categoryPostData,
    isLoading,
    isError,
  } = useQuery(
    'followingProductList',
    () => getFollowingProduct(followingList),
    {
      enabled: !!followingList,
    },
  );

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

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

  return <HomeTemplate onClickCategory={onClickCategory} />;
};

export default HomePage;
