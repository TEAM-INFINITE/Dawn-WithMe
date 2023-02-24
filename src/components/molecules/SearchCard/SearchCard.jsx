import { Link } from 'react-router-dom';
import SearchCardWrapper from './styled';
import Img from '../../atoms/Img/Img';
import FeedText from '../../atoms/P/Feed/FeedText';

const SearchCard = ({ user, keyword }) => {
  const { accountname, username, image } = user;
  const keywordColor = (name) => {
    if (name.includes(keyword)) {
      return (
        <>
          {name.split(keyword)[0]}
          <strong>{keyword}</strong>
          {name.split(keyword)[1]}
        </>
      );
    }
    return name;
  };
  return (
    <Link to={`/userprofile/${user.accountname}`}>
      <SearchCardWrapper>
        <Img src={image} alt={user.accountname} width='50px' />
        <div className='user-info'>
          <FeedText type='username'>{keywordColor(username)}</FeedText>

          <FeedText type='userid'>@{accountname}</FeedText>
        </div>
      </SearchCardWrapper>
    </Link>
  );
};

export default SearchCard;
