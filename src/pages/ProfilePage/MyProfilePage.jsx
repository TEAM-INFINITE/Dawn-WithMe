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
  const { data: profileData, isLoading: isProfileLoading } = useQuery(
    'myProfile',
    getMyProfile,
  );
  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    'myCategoryPost',
    () => getUserProduct(myAccountName),
  );
  const { data: feedData, isLoading: isfeedLoading } = useQuery(
    ['myFeed', myAccountName],
    () => getUserFeedData(myAccountName),
  );
  const isLoading = isProfileLoading || isfeedLoading || isCategoryLoading;

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const onClickShowTypeChange = (type) => {
    setPostShowType(type);
  };

  const selectCategoryData = categoryPostData?.product.filter(
    (el) => el.itemName === category,
  );

  return (
    <MyProfileTemplate
      profileData={profileData}
      selectCategoryData={selectCategoryData}
      postData={feedData}
      postShowType={postShowType}
      onClickShowTypeChange={onClickShowTypeChange}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      isLoading={isLoading}
    />
  );
};

export default MyProfilePage;
