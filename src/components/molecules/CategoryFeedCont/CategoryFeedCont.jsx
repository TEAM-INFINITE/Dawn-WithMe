import { Link, useLocation } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import CategoryFeedContWrapper from './styled';

const CategoryFeedCont = ({ children, src, id }) => {
  const location = useLocation();
  console.log(location);
  return (
    <CategoryFeedContWrapper>
      <Link to={`${location.pathname}/${id}`}>
        <p>{children}</p>
        <Img src={src} alt='게시판 사진' width='100%' className='feedImg' />
      </Link>
    </CategoryFeedContWrapper>
  );
};

export default CategoryFeedCont;
