import { Link } from 'react-router-dom';
import UserProfileMore from '../../molecules/UserProfile/UserProfileMore';
import { TextWrap, FeedMoreIconWrap, FreePostWrap } from './styled';
import FeedCont from '../../molecules/FeedCont/FeedCont';
import FeedMoreIcon from '../../molecules/FeedMoreIcon/FeedMoreIcon';
import HeartIcon from '../../../assets/images/icon-heart.png';
import MessageIcon from '../../../assets/images/icon-message-circle.png';

const FeedCard = ({ data }) => {
  return (
    <FreePostWrap>
      <UserProfileMore data={data} />
      <TextWrap>
        {/* 자유게시판 상세페이지로 이동 */}
        <FeedCont src={data.image} data={data}>
          {data.content}
        </FeedCont>
        <FeedMoreIconWrap>
          <FeedMoreIcon src={HeartIcon} alt='좋아요' count={data.heartCount} />
          {/* id 바꾸기 */}
          <Link to={`/feeddetail/${data.id}`}>
            <FeedMoreIcon
              src={MessageIcon}
              alt='댓글'
              count={data.commentCount}
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
