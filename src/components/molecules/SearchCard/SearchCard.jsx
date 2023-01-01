import { Link } from 'react-router-dom';
import SearchCardWrapper from './styled';
import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';

const SearchCard = ({ user, keyword }) => {
  const { accountname, username, image } = user;
  const keywordColor = (userInfo) => {
    if (userInfo.includes(keyword)) {
      return (
        <>
          {userInfo.split(keyword)[0]}
          <span className='keyword'>{keyword}</span>
          {userInfo.split(keyword)[1]}
        </>
      );
    }
    return userInfo;
  };
  return (
    <Link to={`/userprofile/${user.accountname}`}>
      <SearchCardWrapper>
        <Img src={image} alt={user.accountname} width='50px' />
        <div className='user-info'>
          <FeedText type='username'>{keywordColor(username)}</FeedText>

          <FeedText type='userid'>@{keywordColor(accountname)}</FeedText>
        </div>
      </SearchCardWrapper>
    </Link>
  );
};

export default SearchCard;
