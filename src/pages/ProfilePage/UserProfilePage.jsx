import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import postPostReport from '../../api/feed/postPostReport';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import getUserFeedData from '../../api/profile/getUserFeedData';
import getUserProduct from '../../api/profile/getUserProduct';
import getUserProfile from '../../api/profile/getUserProfile';
import UserProfileTemplate from '../../components/template/UserProfileTemplate/UserProfileTemplate';
import { isErrorAtom, modalAtom } from '../../recoil/atom';

const UserProfilePage = () => {
  const params = useParams();
  const { accountname } = params;
  const [isFollow, setIsFollow] = useState();
  const [followCount, setFollowerCount] = useState();
  const [postShowType, setPostShowType] = useState('list');
  const [category, setCategory] = useState('study');
  const [modal, setModal] = useRecoilState(modalAtom);
  const isError = useRecoilValue(isErrorAtom);

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

  const reportPostMutation = useMutation(postPostReport, {
    onSuccess() {
      alert('신고 되었습니다!');
    },
    onError(err) {
      console.log(err);
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

  const onClickMoreHandler = (id) => {
    setModal({
      ...modal,
      isActive: { ...modal.isActive, post: true },
      modalListText: [{ id: 1, text: '신고하기' }],
      id,
    });
  };

  const onClickModalListHandler = () => {
    setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
    reportPostMutation.mutate({ postId: modal.id });
  };

  const selectCategoryData = !isError
    ? categoryPostData?.product.filter((el) => el.itemName === category)
    : null;

  return (
    <UserProfileTemplate
      profileData={profileData}
      postData={feedData}
      isFollow={isFollow}
      isError={isError}
      isLoading={isLoading}
      followCount={followCount}
      onClickFollowToggle={onClickFollowToggle}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onClickShowTypeChange={onClickShowTypeChange}
      onClickModalListHandler={onClickModalListHandler}
      onClickMoreHandler={onClickMoreHandler}
      selectCategoryData={selectCategoryData}
      postShowType={postShowType}
      modal={modal}
    />
  );
};

export default UserProfilePage;
