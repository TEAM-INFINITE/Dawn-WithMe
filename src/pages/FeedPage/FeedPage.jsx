import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import deletePost from '../../api/feed/deletePost';
import getFollowFeed from '../../api/feed/getFollowFeed';
import postPostReport from '../../api/feed/postPostReport';
import FeedTemplate from '../../components/template/FeedTemplate/FeedTemplate';
import { alertAtom, isErrorAtom, modalAtom } from '../../recoil/atom';

const FeedPage = () => {
  const [postList, setPostList] = useState([]);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alerts, setAlerts] = useRecoilState(alertAtom);
  const isError = useRecoilValue(isErrorAtom);
  const navigate = useNavigate();
  const myAccountName = localStorage.getItem('accountname');

  const { data: followpostdata, isLoading } = useQuery('feed', getFollowFeed);

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

  const reportPostMutation = useMutation(postPostReport, {
    onSuccess() {
      alert('신고 되었습니다!');
    },
    onError(err) {
      console.log(err);
    },
  });

  const onClickAlertEventHandler = () => {
    deletePostMutation.mutate({ postId: modal.id });
  };

  const onClickMoreHandler = (id, userId) => {
    if (userId === myAccountName) {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, post: true },
        modalListText: [
          { id: 1, text: '삭제' },
          { id: 2, text: '수정' },
        ],
        id,
      });
    } else {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, post: true },
        modalListText: [{ id: 1, text: '신고하기' }],
        id,
      });
    }
  };

  const onClickModalListHandler = (text) => {
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
  };

  return (
    <FeedTemplate
      posts={followpostdata?.posts}
      onClickAlertEventHandler={onClickAlertEventHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickMoreHandler={onClickMoreHandler}
      isLoading={isLoading}
      isError={isError}
      modal={modal}
      alerts={alerts}
    />
  );
};

export default FeedPage;
