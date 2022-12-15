import Img from '../../atoms/Img/Img';
import FeedMoreIconBtn from './styled';

const FeedMoreIcon = ({ src, alt, count }) => {
  return (
    <FeedMoreIconBtn type='button'>
      <Img src={src} width='20px' alt={alt} />
      <span>{count}</span>
    </FeedMoreIconBtn>
  );
};

export default FeedMoreIcon;
