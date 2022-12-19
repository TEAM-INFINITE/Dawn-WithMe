import { Link } from 'react-router-dom';
import UserProfileMore from '../../molecules/UserProfile/UserProfileMore';
import { TextWrap, FeedMoreIconWrap, FreePostWrap } from './styled';
import FeedCont from '../../molecules/FeedCont/FeedCont';
import PostImg from '../../../assets/images/img-board.jpeg';
import FeedMoreIcon from '../../molecules/FeedMoreIcon/FeedMoreIcon';
import HeartIcon from '../../../assets/images/icon-heart.png';
import MessageIcon from '../../../assets/images/icon-message-circle.png';

const FeedCard = () => {
  return (
    <FreePostWrap>
      <UserProfileMore />
      <TextWrap>
        {/* 자유게시판 상세페이지로 이동 */}
        <FeedCont src={PostImg}>
          안녕하세요. 저는 프론트엔드 개발 취준생 아산의 짱입니다.
        </FeedCont>
        <FeedMoreIconWrap>
          <FeedMoreIcon src={HeartIcon} alt='좋아요' count={22} />
          <Link to='/feeddetail'>
            <FeedMoreIcon src={MessageIcon} alt='댓글' count={7} />
          </Link>
        </FeedMoreIconWrap>
        {/* 작성일에 맞추어 날짜 변경 */}
        <p>2022년 12월 14일</p>
      </TextWrap>
    </FreePostWrap>
  );
};

export default FeedCard;
