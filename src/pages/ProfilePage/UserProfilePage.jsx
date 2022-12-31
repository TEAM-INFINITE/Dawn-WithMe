import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import getUserFeedData from '../../api/profile/getUserFeedData';
import getUserProduct from '../../api/profile/getUserProduct';
import getUserProfile from '../../api/profile/getUserProfile';
import UserProfileTemplate from '../../components/template/UserProfileTemplate/UserProfileTemplate';

const UserProfilePage = () => {
  const params = useParams();
  const { accountname } = params;
  const [isFollow, setIsFollow] = useState();
  const [followCount, setFollowerCount] = useState();
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');

  const { data: profileData, isLoading: isProfileLoading } = useQuery(
    ['userProfile', accountname],
    () => getUserProfile(accountname),
    {
      refetchOnWindowFocus: false,
      onSuccess(resData) {
        setIsFollow(resData.profile.isfollow);
        setFollowerCount(resData.profile.followerCount);
      },
    },
  );

  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    'categoryPost',
    () => getUserProduct(profileData.profile.accountname),
    { enabled: !!profileData },
  );

  const { data: feedData, isLoading: isfeedLoading } = useQuery(
    ['feedData', accountname],
    () => getUserFeedData(accountname),
  );

  const addFollowMutation = useMutation(addFollow, {
    onSuccess(resData) {
      setIsFollow(resData.profile.isfollow);
      setFollowerCount(resData.profile.followerCount);
    },
  });
  const deleteFollowMutation = useMutation(deleteFollow, {
    onSuccess(resData) {
      setIsFollow(resData.profile.isfollow);
      setFollowerCount(resData.profile.followerCount);
    },
  });

  const onClickFollowToggle = () => {
    if (isFollow) {
      deleteFollowMutation.mutate({
        accountName: profileData.profile.accountname,
      });
    } else {
      addFollowMutation.mutate({
        accountName: profileData.profile.accountname,
      });
    }
  };

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const onClickShowTypeChange = (type) => {
    setPostShowType(type);
  };

  if (isProfileLoading) return <p>로딩 중</p>;
  if (isCategoryLoading) return <p>로딩 중</p>;
  if (isfeedLoading) return <p>로딩 중</p>;

  const { post } = feedData;
  const selectCategoryData = categoryPostData.product.filter(
    (el) => el.itemName === category,
  );

  return (
    <UserProfileTemplate
      profileData={profileData}
      isFollow={isFollow}
      followCount={followCount}
      postData={post}
      onClickFollowToggle={onClickFollowToggle}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onClickShowTypeChange={onClickShowTypeChange}
      selectCategoryData={selectCategoryData}
      postShowType={postShowType}
    />
  );
};

export default UserProfilePage;
