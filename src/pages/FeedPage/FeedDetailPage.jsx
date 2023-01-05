import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import deleteComment from '../../api/comment/deleteComment';
import getCommentList from '../../api/comment/getCommentList';
import postCommentReport from '../../api/comment/postCommentReport';
import postCommentWrite from '../../api/comment/postCommentWrite';
import deletePost from '../../api/feed/deletePost';
import getFeedDetail from '../../api/feed/getFeedDetail';
import postPostReport from '../../api/feed/postPostReport';
import getUserInfo from '../../api/user/getUserInfo';
import FeedDetailTemplate from '../../components/template/FeedTemplate/FeedDetailTemplate';

const FeedDetailPage = () => {
  const { id } = useParams();
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [inputText, setInputText] = useState({
    content: '',
  });

  // 유저 정보 불러오기
  const { data: userdata, isLoading: isProfileDataLoading } = useQuery(
    ['userInfo'],
    getUserInfo,
  );

  // 게시물 불러오기
  const {
    data: postdata,
    isLoading: isPostLoading,
    isError,
  } = useQuery(['detailfeed', id], () => {
    return getFeedDetail(id);
  });

  // 댓글 리스트
  const { isLoading: isCommentLoading } = useQuery(
    ['commentlist', id],
    () => {
      return getCommentList(id);
    },
    {
      enabled: !!postdata,
      onSuccess(resData) {
        setCommentList(resData.comments);
      },
    },
  );
  const isLoading = isProfileDataLoading || isPostLoading || isCommentLoading;

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

  // 댓글 입력
  const commentMutation = useMutation(postCommentWrite, {
    onSuccess(data) {
      console.log(data);
      setCommentList([data.comment, ...commentList]);
      setInputText({ content: '' });
    },
    onError(err) {
      console.log(err);
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation(deleteComment, {
    onSuccess(data) {
      console.log(data);
      if (data.data.status === '200') {
        setCommentList((prev) =>
          [...prev].filter((item) => item.id !== data.id),
        );
      }
    },
    onError(err) {
      console.log(err);
    },
  });

  // 댓글 신고
  const reportCommentMutation = useMutation(postCommentReport, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangeInputHandler = (event) => {
    setInputText({ ...inputText, content: event.target.value });
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
    commentMutation.mutate({ postId: id, comment: inputText });
  };

  const onClickDeletePost = (postId) => {
    deletePostMutation.mutate({ postId });
  };

  const onClickReportPost = (postId) => {
    reportPostMutation.mutate({ postId });
  };

  const onClickDeleteComment = (postId, commentId) => {
    deleteCommentMutation.mutate({ postId, commentId });
  };

  const onClickReportComment = (postId, commentId) => {
    reportCommentMutation.mutate({ postId, commentId });
  };

  if (isError) return <p>에러 발생!</p>;
  return (
    <FeedDetailTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      onClickDeletePost={onClickDeletePost}
      onClickReportPost={onClickReportPost}
      onClickDeleteComment={onClickDeleteComment}
      onClickReportComment={onClickReportComment}
      inputText={inputText.content}
      commentList={commentList}
      post={postdata?.post}
      user={userdata?.user}
      isLoading={isLoading}
    />
  );
};

export default FeedDetailPage;
