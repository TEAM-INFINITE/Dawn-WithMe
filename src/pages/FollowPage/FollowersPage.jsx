/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import getFollowersList from '../../api/follow/getFollowersList';
import addFollow from '../../api/profile/addFollow';
import deleteFollow from '../../api/profile/deleteFollow';
import FollowersTemplate from '../../components/template/FollowersTemplate/FollowersTemplate';
import { isErrorAtom } from '../../recoil/atom';

const FollowersPage = () => {
  const params = useParams().accountname;
  const [followData, setFollowData] = useState([]);
  const isError = useRecoilValue(isErrorAtom);
  const { isLoading } = useQuery(
    ['followers', params],
    () => getFollowersList(params),
    {
      onSuccess(resData) {
        if (!resData.status) {
          setFollowData([...resData]);
        }
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

  return (
    <FollowersTemplate
      followersData={followData}
      onClickFollowToggle={onClickFollowToggle}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default FollowersPage;
