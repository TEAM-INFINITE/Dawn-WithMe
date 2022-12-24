import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import deleteComment from '../../api/comment/deleteComment';
import getCommentList from '../../api/comment/getCommentList';
import postCommentWrite from '../../api/comment/postCommentWrite';
import getFollowFeedDeatail from '../../api/feed/getFollowFeedDetail';
import getUserInfo from '../../api/user/getUserInfo';
import FeedDetailTemplate from '../../components/template/FeedTemplate/FeedDetailTemplate';

const FeedDetailPage = () => {
  const { id } = useParams();

  // 유저 정보 불러오기
  const { data: userdata, isLoading: isProfileDataLoading } = useQuery(
    ['userInfo'],
    getUserInfo,
  );

  // 게시물 불러오기
  const {
    data: postdata,
    isLoading,
    isError,
  } = useQuery(['detailfeed', id], () => {
    return getFollowFeedDeatail(id);
  });

  // 댓글 입력
  const [commentList, setCommentList] = useState([]);
  const [inputText, setInputText] = useState({
    content: '',
  });

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

  const onChangeInputHandler = (event) => {
    setInputText({ ...inputText, content: event.target.value });
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
    commentMutation.mutate({ postId: id, comment: inputText });
  };

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

  if (isLoading) return <p>로딩 중...</p>;
  if (isCommentLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;
  if (isProfileDataLoading) return <p>로딩 중...</p>;
  const { user } = userdata;
  const { post } = postdata;

  // 댓글 삭제

  return (
    <FeedDetailTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      inputText={inputText.content}
      commentList={commentList}
      post={post}
      user={user}
    />
  );
};

export default FeedDetailPage;
