import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from 'react-query';
import UserProfileMore from '../../molecules/UserProfile/UserProfileMore';
import { TextWrap, FeedMoreIconWrap, FreePostWrap } from './styled';
import FeedCont from '../../molecules/FeedCont/FeedCont';
import FeedMoreIcon from '../../molecules/FeedMoreIcon/FeedMoreIcon';
import unHeartIcon from '../../../assets/images/icon-heart.png';
import HeartIcon from '../../../assets/images/icon-heart-on.png';
import MessageIcon from '../../../assets/images/icon-message-circle.png';
import postLiked from '../../../api/feed/postLiked';
import deleteLiked from '../../../api/feed/deleteLiked';
import Modal from '../../molecules/Modal/Modal';
import Alert from '../../molecules/Alert/Alert';

const FeedCard = ({
  data,
  commentList,
  postId,
  onClickDeletePost,
  onClickReportPost,
}) => {
  // 모달
  const myAccountName = localStorage.getItem('accountname');
  const { author } = data;
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);

  const modalObj = [];
  if (myAccountName === author.accountname) {
    modalObj.push({
      type: 'feedpost',
      text: { 삭제: '', 수정: `/feed/edit/${postId}` },
      alertText: ['게시글을 삭제할까요?', '삭제'],
    });
  } else {
    modalObj.push({
      type: 'feedpost',
      text: { 신고하기: '' },
      alertText: ['게시글을 신고하시겠어요?', '신고'],
    });
  }

  const modalCont = modalObj[0];

  // 좋아요
  const location = useLocation();
  const [liked, setLiked] = useState(data.hearted);
  const [heartCount, setHeartCount] = useState(data.heartCount);
  const likeMutation = useMutation(postLiked, {
    onSuccess(res) {
      setLiked(res.post.hearted);
      setHeartCount(res.post.heartCount);
    },
    onError(err) {
      console.log(err);
    },
  });

  const unlikeMutation = useMutation(deleteLiked, {
    onSuccess(res) {
      setLiked(res.post.hearted);
      setHeartCount(res.post.heartCount);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onClickHeartCounter = () => {
    if (!liked) {
      likeMutation.mutate(data.id);
    } else {
      unlikeMutation.mutate(data.id);
    }
  };

  return (
    <>
      <FreePostWrap>
        <UserProfileMore
          data={data}
          postId={postId}
          setOnModal={setOnModal}
          onClickDeletePost={onClickDeletePost}
          onClickReportPost={onClickReportPost}
        />
        <TextWrap>
          {/* 자유게시판 상세페이지로 이동 */}
          <FeedCont
            location={location}
            src={data.image && data.image.split(',')}
            data={data}
          >
            {data.content}
          </FeedCont>
          <FeedMoreIconWrap>
            <FeedMoreIcon
              onClickHeartCounter={onClickHeartCounter}
              src={liked ? HeartIcon : unHeartIcon}
              alt='좋아요'
              count={heartCount}
            />
            <Link to={`/feeddetail/${data.id}`}>
              <FeedMoreIcon
                src={MessageIcon}
                alt='댓글'
                count={
                  location.pathname.includes('feeddetail')
                    ? commentList.length
                    : data.commentCount
                }
              />
            </Link>
          </FeedMoreIconWrap>
          {/* 작성일에 맞추어 날짜 변경 */}
          <p>{data.createdAt.substring(0, 10)}</p>
        </TextWrap>
      </FreePostWrap>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          setOnModal={setOnModal}
          setOnAlert={setOnAlert}
          modalCont={modalCont}
        />
      )}
      {onAlert && (
        <Alert
          type={modalCont.type}
          questionText={modalCont.alertText[0]}
          rightBtnText={modalCont.alertText[1]}
          onClose={() => setOnAlert(false)}
          setOnModal={setOnModal}
          onClickDeletePost={onClickDeletePost}
          onClickReportPost={onClickReportPost}
          location={location}
          postId={postId}
        />
      )}
    </>
  );
};

export default FeedCard;
