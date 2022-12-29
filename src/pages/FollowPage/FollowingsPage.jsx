/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import getFollowingList from '../../api/follow/getFollowingList';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import FollowingsTemplate from '../../components/template/FollowingsTemplate/FollowingsTemplate';

const FollowingsPage = () => {
  const params = useParams().accountname;
  const [followData, setFollowData] = useState([]);
  const { isLoading } = useQuery(
    ['followings', params],
    () => getFollowingList(params),
    {
      onSuccess(resData) {
        setFollowData([...resData]);
      },
    },
  );

  const addFollowMutation = useMutation(addFollow, {
    onSuccess(resData) {
      setFollowData((prev) => {
        return [...prev].map((item) => {
          return item._id === resData.profile._id
            ? { ...resData.profile }
            : item;
        });
      });
      console.log(resData);
    },
  });

  const deleteFollowMutation = useMutation(deleteFollow, {
    onSuccess(resData) {
      setFollowData((prev) => {
        return [...prev].map((item) => {
          return item._id === resData.profile._id
            ? { ...resData.profile }
            : item;
        });
      });
      console.log(resData);
    },
  });

  const onClickFollowToggle = (accountName, isFollow) => {
    if (isFollow) {
      deleteFollowMutation.mutate({
        accountName,
      });
    } else {
      addFollowMutation.mutate({
        accountName,
      });
    }
  };

  if (isLoading) return <p>로딩</p>;

  console.log(followData);

  return (
    <FollowingsTemplate
      followingsData={followData}
      onClickFollowToggle={onClickFollowToggle}
    />
  );
};

export default FollowingsPage;
