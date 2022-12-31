import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import deletePost from '../../api/feed/deletePost';
import getFollowFeed from '../../api/feed/getFollowFeed';
import postPostReport from '../../api/feed/postPostReport';
import FeedTemplate from '../../components/template/FeedTemplate/FeedTemplate';

const FeedPage = () => {
  // 내가 팔로우한 사용자의 게시물 불러오기
  const {
    data: followpostdata,
    isLoading,
    isError,
  } = useQuery('feed', getFollowFeed);

  // 게시물 삭제
  const [postList, setPostList] = useState([]);
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

  // 게시물 신고
  const reportPostMutation = useMutation(postPostReport, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });
  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  const { posts } = followpostdata;

  const onClickDeletePost = (postId) => {
    deletePostMutation.mutate({ postId });
  };

  const onClickReportPost = (postId) => {
    reportPostMutation.mutate({ postId });
  };

  return (
    <FeedTemplate
      posts={posts}
      onClickDeletePost={onClickDeletePost}
      onClickReportPost={onClickReportPost}
    />
  );
};

export default FeedPage;
