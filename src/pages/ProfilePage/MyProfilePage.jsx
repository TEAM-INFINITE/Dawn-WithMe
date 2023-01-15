import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import getUserProduct from '../../api/profile/getUserProduct';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';
import getUserFeedData from '../../api/profile/getUserFeedData';
import deletePost from '../../api/feed/deletePost';
import { alertAtom, isErrorAtom, modalAtom } from '../../recoil/atom';

const MyProfilePage = () => {
  const myAccountName = localStorage.getItem('accountname');
  const [category, setCategory] = useState('study');
  const [postShowType, setPostShowType] = useState('list');
  const [postList, setPostList] = useState({ post: [] });
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alerts, setAlerts] = useRecoilState(alertAtom);
  const isError = useRecoilValue(isErrorAtom);
  const navigate = useNavigate();

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
        setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
        setAlerts({ ...alerts, isActive: { ...alerts.isActive, post: false } });
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

  const onClickAlertEventHandler = () => {
    deletePostMutation.mutate({ postId: modal.id });
  };

  const selectCategoryData = !isError
    ? categoryPostData?.product.filter((el) => el.itemName === category)
    : null;

  const onClickMoreHandler = (id) => {
    setModal({
      ...modal,
      isActive: { ...modal.isActive, post: true },
      modalListText: [
        { id: 1, text: '삭제' },
        { id: 2, text: '수정' },
      ],
      id,
    });
  };

  const onClickModalListHandler = (text) => {
    if (text === '삭제') {
      setAlerts({
        ...alerts,
        isActive: { ...alerts.isActive, post: true },
        text: { alertText: `게시글을 ${text} 할까요?`, text },
      });
    } else if (text === '수정') {
      setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
      navigate(`/feed/edit/${modal.id}`);
    }
  };

  return (
    <MyProfileTemplate
      profileData={profileData}
      selectCategoryData={selectCategoryData}
      postData={postList}
      postShowType={postShowType}
      onClickShowTypeChange={onClickShowTypeChange}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      isLoading={isLoading}
      isError={isError}
      modal={modal}
      alerts={alerts}
    />
  );
};

export default MyProfilePage;
