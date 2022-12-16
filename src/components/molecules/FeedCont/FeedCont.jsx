import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import FeedContWrapper from './styled';

const FeedCont = ({ children, src }) => {
  return (
    <FeedContWrapper>
      <Link to='/feedDetail'>
        <p>{children}</p>
        <Img src={src} alt='게시판 사진' width='100%' className='feedImg' />
      </Link>
    </FeedContWrapper>
  );
};

export default FeedCont;
