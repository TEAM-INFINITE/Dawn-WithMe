import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import getUserFeedData from '../../api/profile/getUserFeedData';
import getUserProduct from '../../api/profile/getUserProduct';
import getUserProfile from '../../api/profile/getUserProfile';
import UserProfileTemplate from '../../components/template/UserProfileTemplate/UserProfileTemplate';
import { isErrorAtom } from '../../recoil/atom';

const UserProfilePage = () => {
  const params = useParams();
  const { accountname } = params;
  const [isFollow, setIsFollow] = useState();
  const [followCount, setFollowerCount] = useState();
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');
  const [isError, setIsError] = useRecoilState(isErrorAtom);
  const { data: profileData, isLoading: isProfileLoading } = useQuery(
    ['userProfile', accountname],
    () => getUserProfile(accountname),
    {
      onSuccess(resData) {
        if (!resData.status) {
          setIsFollow(resData.profile.isfollow);
          setFollowerCount(resData.profile.followerCount);
        }
      },
    },
  );
  const { data: categoryPostData, isLoading: isCategoryLoading } = useQuery(
    'categoryPost',
    () => getUserProduct(profileData.profile.accountname),
    {
      enabled: !!profileData,
    },
  );
  const { data: feedData, isLoading: isfeedLoading } = useQuery(
    ['feedData', accountname],
    () => getUserFeedData(accountname),
  );
  const isLoading = isProfileLoading || isCategoryLoading || isfeedLoading;

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

  const selectCategoryData = !isError
    ? categoryPostData?.product.filter((el) => el.itemName === category)
    : null;

  return (
    <UserProfileTemplate
      profileData={profileData}
      isFollow={isFollow}
      isError={isError}
      followCount={followCount}
      postData={feedData}
      onClickFollowToggle={onClickFollowToggle}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onClickShowTypeChange={onClickShowTypeChange}
      selectCategoryData={selectCategoryData}
      postShowType={postShowType}
      isLoading={isLoading}
    />
  );
};

export default UserProfilePage;
