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

// 좋아요 관련
const FeedCard = ({ data, commentList }) => {
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
    <FreePostWrap>
      <UserProfileMore data={data} />
      <TextWrap>
        {/* 자유게시판 상세페이지로 이동 */}
        <FeedCont src={data.image} data={data}>
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
                location.pathname === '/feed'
                  ? data.commentCount
                  : commentList.length
              }
            />
          </Link>
        </FeedMoreIconWrap>
        {/* 작성일에 맞추어 날짜 변경 */}
        <p>{data.updatedAt.substring(0, 10)}</p>
      </TextWrap>
    </FreePostWrap>
  );
};

export default FeedCard;
