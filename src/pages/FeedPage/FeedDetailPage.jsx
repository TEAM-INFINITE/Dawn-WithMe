import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import deleteComment from '../../api/comment/deleteComment';
import getCommentList from '../../api/comment/getCommentList';
import postCommentReport from '../../api/comment/postCommentReport';
import postCommentWrite from '../../api/comment/postCommentWrite';
import deletePost from '../../api/feed/deletePost';
import getFeedDetail from '../../api/feed/getFeedDetail';
import postPostReport from '../../api/feed/postPostReport';
import getMyProfile from '../../api/profile/getMyProfile';
import FeedDetailTemplate from '../../components/template/FeedTemplate/FeedDetailTemplate';
import { alertAtom, isErrorAtom, modalAtom } from '../../recoil/atom';

const FeedDetailPage = () => {
  const { id } = useParams();
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [inputText, setInputText] = useState({
    content: '',
  });
  const isError = useRecoilValue(isErrorAtom);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alerts, setAlerts] = useRecoilState(alertAtom);
  const myAccountName = localStorage.getItem('accountname');
  const navigate = useNavigate();
  const { data: userdata, isLoading: isProfileDataLoading } = useQuery(
    ['userInfo'],
    getMyProfile,
  );

  // 게시물 불러오기
  const { data: postdata, isLoading: isPostLoading } = useQuery(
    ['detailfeed', id],
    () => getFeedDetail(id),
  );

  // 댓글 리스트
  const { isLoading: isCommentLoading } = useQuery(
    ['commentlist', id],
    () => getCommentList(id),
    {
      enabled: !!postdata,
      onSuccess(resData) {
        if (!resData.status) {
          setCommentList(resData.comments);
        }
      },
    },
  );
  const isLoading = isProfileDataLoading || isPostLoading || isCommentLoading;

  // 게시물 삭제
  const deletePostMutation = useMutation(deletePost, {
    onSuccess(data) {
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
    onSuccess() {
      alert('신고 되었습니다!');
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

  const onClickAlertEventHandler = () => {
    if (modal.isActive.post) {
      deletePostMutation.mutate({ postId: modal.id });

      setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
      setAlerts({ ...alerts, isActive: { ...alerts.isActive, post: false } });
      navigate('/myprofile');
    } else if (modal.isActive.comment) {
      deleteCommentMutation.mutate({
        postId: modal.id.postId,
        commentId: modal.id.commentId,
      });

      setModal({ ...modal, isActive: { ...modal.isActive, comment: false } });
      setAlerts({
        ...alerts,
        isActive: { ...alerts.isActive, comment: false },
      });
    }
  };

  const onClickMoreHandler = (postId, userId) => {
    if (userId === myAccountName) {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, post: true },
        modalListText: [
          { id: 1, text: '삭제' },
          { id: 2, text: '수정' },
        ],
        id: postId,
      });
    } else {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, post: true },
        modalListText: [{ id: 1, text: '신고하기' }],
        id: postId,
      });
    }
  };

  const onClickCommentMoreHandler = (commentId, postId, userId) => {
    if (userId === myAccountName) {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, comment: true },
        modalListText: [{ id: 1, text: '삭제' }],
        id: { commentId, postId },
      });
    } else {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, comment: true },
        modalListText: [{ id: 1, text: '신고하기' }],
        id: { commentId, postId },
      });
    }
  };

  const onClickModalListHandler = (text) => {
    if (modal.isActive.post) {
      if (text === '신고하기') {
        setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
        reportPostMutation.mutate({ postId: modal.id });
      } else if (text === '삭제') {
        setAlerts({
          ...alerts,
          isActive: { ...alerts.isActive, post: true },
          text: { alertText: `게시글을 ${text} 할까요?`, text },
        });
      } else if (text === '수정') {
        setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
        navigate(`/feed/edit/${modal.id}`);
      }
    } else if (modal.isActive.comment) {
      if (text === '신고하기') {
        setModal({ ...modal, isActive: { ...modal.isActive, comment: false } });
        reportCommentMutation.mutate({
          postId: modal.id.postId,
          commentId: modal.id.commentId,
        });
      } else if (text === '삭제') {
        setAlerts({
          ...alerts,
          isActive: { ...alerts.isActive, comment: true },
          text: { alertText: `게시글을 ${text} 할까요?`, text },
        });
      }
    }
  };

  return (
    <FeedDetailTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickCommentMoreHandler={onClickCommentMoreHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      inputText={inputText.content}
      commentList={commentList}
      post={postdata?.post}
      user={userdata?.user}
      isLoading={isLoading}
      isError={isError}
      alerts={alerts}
      modal={modal}
    />
  );
};

export default FeedDetailPage;
