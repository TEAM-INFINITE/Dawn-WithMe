import Slider from 'react-slick';
import '../../../styles/slick-theme.css';
import '../../../styles/slick.css';
import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import FeedContWrapper from './styled';

const FeedCont = ({ location, children, src, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <FeedContWrapper>
      <Link to={`/feeddetail/${data.id}`}>
        <p>{children}</p>
        <Slider {...settings}>
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
        </Slider>
      </Link>
    </FeedContWrapper>
  );
};

export default FeedCont;
