import { useState } from 'react';
import { useQuery } from 'react-query';
import getMyPost from '../../api/profile/getMyPost';
import getMyProduct from '../../api/profile/getMyProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';
import getMyFeed from '../../api/profile/getMyFeed';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [myPost, setMyPost] = useState([]);
  const [category, setCategory] = useState('study');
  const [PostShowType, setPostShowType] = useState('list');
  const { data: profileData, isLoading } = useQuery('myProfile', getMyProfile);
  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    'myCategoryPost',
    () => getMyProduct(myAccountName),
  );
  const { data: postData, isLoading: isPostLoading } = useQuery('myPost', () =>
    getMyPost(myAccountName),
  );
  const { data: feedData, isLoading: isfeedLoading } = useQuery(
    ['myFeed', myAccountName],
    () => getMyFeed(myAccountName),
    {
      onSuccess(successData) {
        // setMyPost([...successData]);
        console.log(successData);
      },
    },
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
      PostShowType={PostShowType}
      onClickShowTypeChange={onClickShowTypeChange}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
    />
  );
};

export default MyProfilePage;
