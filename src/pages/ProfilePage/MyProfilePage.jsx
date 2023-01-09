import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import getUserProduct from '../../api/profile/getUserProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';
import getUserFeedData from '../../api/profile/getUserFeedData';
import deletePost from '../../api/feed/deletePost';
import { isErrorAtom } from '../../recoil/atom';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');
  const [postList, setPostList] = useState({ post: [] });
  const isError = useRecoilValue(isErrorAtom);

  const { data: profileData, isLoading: isProfileLoading } = useQuery(
    'myProfile',
    getMyProfile,
  );

  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    ['myCategoryPost', myAccountName],
    () => getUserProduct(myAccountName),
  );

  const { isLoading: isfeedLoading } = useQuery(
    ['myFeed', myAccountName],
    () => getUserFeedData(myAccountName),
    {
      onSuccess(resData) {
        if (!resData.status) {
          setPostList({ post: resData.post });
        }
      },
    },
  );

  // 게시물 삭제
  const deletePostMutation = useMutation(deletePost, {
    onSuccess(data) {
      console.log(data);
      if (data.data.status === '200') {
        setPostList((prev) => {
          return { post: [...prev.post].filter((item) => item.id !== data.id) };
        });
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

  const selectCategoryData = !isError
    ? categoryPostData?.product.filter((el) => el.itemName === category)
    : null;

  return (
    <MyProfileTemplate
      profileData={profileData}
      selectCategoryData={selectCategoryData}
      postData={postList}
      postShowType={postShowType}
      onClickShowTypeChange={onClickShowTypeChange}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onClickDeletePost={onClickDeletePost}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default MyProfilePage;
