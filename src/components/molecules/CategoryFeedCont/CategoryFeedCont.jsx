import { Link, useLocation } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import CategoryFeedContWrapper from './styled';

const CategoryFeedCont = ({ children, src, id, type, people }) => {
  const location = useLocation();

  return (
    <CategoryFeedContWrapper>
      <Link to={`${location.pathname}/${id}`}>
        <p>{children}</p>
        <Img src={src} alt='게시판 사진' width='100%' className='feedImg' />
        {type === 'study' && (
          <p>
            참여 인원 {Math.ceil(people / 2)}/<span>{people}</span>
          </p>
        )}
      </Link>
    </CategoryFeedContWrapper>
  );
};

export default CategoryFeedCont;
