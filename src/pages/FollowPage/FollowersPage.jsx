/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import getFollowersList from '../../api/follow/getFollowersList';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import FollowersTemplate from '../../components/template/FollowersTemplate/FollowersTemplate';

const FollowersPage = () => {
  const params = useParams().accountname;
  const [followData, setFollowData] = useState([]);
  const { isLoading } = useQuery(
    ['followers', params],
    () => getFollowersList(params),
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

  return (
    <FollowersTemplate
      followersData={followData}
      onClickFollowToggle={onClickFollowToggle}
    />
  );
};

export default FollowersPage;
