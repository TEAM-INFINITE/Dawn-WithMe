import { useState } from 'react';
import { useQuery } from 'react-query';
import getMyPost from '../../api/profile/getMyPost';
import getMyProduct from '../../api/profile/getMyProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [category, setCategory] = useState('study');
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery('myProfile', getMyProfile);
  const {
    data: categoryPostData,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery('myCategoryPost', () => getMyProduct(myAccountName));
  const { data: postData, isLoading: isPostLoading } = useQuery('myPost', () =>
    getMyPost(myAccountName),
  );

  if (isLoading) return <p>로딩 중</p>;
  if (isCategoryLoading) return <p>로딩 중</p>;
  if (isPostLoading) return <p>로딩 중</p>;

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const selectCategoryData = categoryPostData.product.filter(
    (el) => el.itemName === category,
  );

  return (
    <MyProfileTemplate
      profileData={profileData}
      selectCategoryData={selectCategoryData}
      myPostData={postData}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
    />
  );
};

export default MyProfilePage;
