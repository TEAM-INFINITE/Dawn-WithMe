import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import getMyPost from '../../api/profile/getMyPost';
import getUserProduct from '../../api/profile/getUserProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';
import getUserFeedData from '../../api/profile/getUserFeedData';
import deletePost from '../../api/feed/deletePost';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');
  const [postList, setPostList] = useState([]);

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

  // 게시물 삭제
  const deletePostMutation = useMutation(deletePost, {
    onSuccess(data) {
      console.log(data);
      if (data.data.status === '200') {
        setPostList((prev) => [...prev].filter((item) => item.id !== data.id));
      }
    },
    onError(err) {
      console.log(err);
    },
  });

  const isLoading = isProfileLoading || isfeedLoading || isCategoryLoading;

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const onClickShowTypeChange = (type) => {
    setPostShowType(type);
  };

  const onClickDeletePost = (postId) => {
    deletePostMutation.mutate({ postId });
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
      onClickDeletePost={onClickDeletePost}
      isLoading={isLoading}
    />
  );
};

export default MyProfilePage;
