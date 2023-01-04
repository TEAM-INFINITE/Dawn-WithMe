import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import deletePost from '../../api/feed/deletePost';
import getFollowFeed from '../../api/feed/getFollowFeed';
import postPostReport from '../../api/feed/postPostReport';
import FeedTemplate from '../../components/template/FeedTemplate/FeedTemplate';

const FeedPage = () => {
  const [postList, setPostList] = useState([]);

  // 내가 팔로우한 사용자의 게시물 불러오기
  const {
    data: followpostdata,
    isLoading,
    isError,
  } = useQuery('feed', getFollowFeed);

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

  // 게시물 신고
  const reportPostMutation = useMutation(postPostReport, {
    onSuccess(data) {
      console.log(data);
      alert('신고 되었습니다!');
    },
    onError(err) {
      console.log(err);
    },
  });

  if (isError) return <p>에러 발생!</p>;

  const onClickDeletePost = (postId) => {
    deletePostMutation.mutate({ postId });
  };

  const onClickReportPost = (postId) => {
    reportPostMutation.mutate({ postId });
  };

  return (
    <FeedTemplate
      posts={followpostdata?.posts}
      onClickDeletePost={onClickDeletePost}
      onClickReportPost={onClickReportPost}
      isLoading={isLoading}
    />
  );
};

export default FeedPage;
