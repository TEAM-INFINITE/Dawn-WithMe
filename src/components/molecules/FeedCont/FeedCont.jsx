import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import FeedContWrapper from './styled';

const FeedCont = ({ location, children, src, data }) => {
  return (
    <FeedContWrapper>
      <Link to={`/feeddetail/${data.id}`}>
        <p>{children}</p>
        <div className='imgwrapper'>
          {location.pathname.includes('feeddetail')
            ? data.image &&
              src.map((item) => (
                <Img
                  key={item}
                  src={item}
                  alt='게시판 사진'
                  width='100%'
                  className='feeddetailImg'
                />
              ))
            : data.image &&
              src.map((item) => (
                <Img
                  key={item}
                  src={item}
                  alt='게시판 사진'
                  width='100%'
                  className='feedImg'
                />
              ))}
        </div>
      </Link>
    </FeedContWrapper>
  );
};

export default FeedCont;
