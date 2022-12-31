import { useState } from 'react';
import { useQuery } from 'react-query';
import getMyPost from '../../api/profile/getMyPost';
import getUserProduct from '../../api/profile/getUserProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';
import getUserFeedData from '../../api/profile/getUserFeedData';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');
  const { data: profileData, isLoading } = useQuery('myProfile', getMyProfile);
  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    'myCategoryPost',
    () => getUserProduct(myAccountName),
  );
  const { data: postData, isLoading: isPostLoading } = useQuery('myPost', () =>
    getMyPost(myAccountName),
  );
  const { data: feedData, isLoading: isfeedLoading } = useQuery(
    ['myFeed', myAccountName],
    () => getUserFeedData(myAccountName),
  );

  if (isLoading) return <p>로딩 중...</p>;
  if (isfeedLoading) return <p>로딩 중</p>;
  if (isCategoryLoading) return <p>로딩 중</p>;
  if (isPostLoading) return <p>로딩 중</p>;

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const onClickShowTypeChange = (type) => {
    setPostShowType(type);
  };

  const { post } = feedData;
  const selectCategoryData = categoryPostData.product.filter(
    (el) => el.itemName === category,
  );

  return (
    <MyProfileTemplate
      profileData={profileData}
      selectCategoryData={selectCategoryData}
      myCategoryPostData={postData}
      postData={post}
      postShowType={postShowType}
      onClickShowTypeChange={onClickShowTypeChange}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
    />
  );
};

export default MyProfilePage;
