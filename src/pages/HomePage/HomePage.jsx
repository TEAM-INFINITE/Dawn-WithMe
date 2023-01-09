import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isErrorAtom } from '../../recoil/atom';
import getFollowingList from '../../api/follow/getFollowingList';
import getFollowingProduct from '../../api/follow/getFollowingProduct';
import HomeTemplate from '../../components/template/HomeTemplate/HomeTemplate';

const HomePage = () => {
  const accountName = localStorage.getItem('accountname');
  const navigate = useNavigate();
  const isError = useRecoilValue(isErrorAtom);
  const { data, isLoading: isFollowingListLoading } = useQuery(
    'followingList',
    () => getFollowingList(accountName),
  );
  const followingList = !isError ? data?.map((user) => user.accountname) : null;

  const { data: categoryPostData, isLoading: isFollowingProductListLoading } =
    useQuery('followingProductList', () => getFollowingProduct(followingList), {
      enabled: !!followingList,
    });

  const isLoading = isFollowingListLoading || isFollowingProductListLoading;

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
    <HomeTemplate
      onClickCategory={onClickCategory}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default HomePage;
