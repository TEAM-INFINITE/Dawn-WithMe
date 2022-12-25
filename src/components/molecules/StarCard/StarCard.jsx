import Star from '../../atoms/Star/Star';
import StarCardWrapper from './styled';

const StarCard = () => {
  return (
    <StarCardWrapper>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </StarCardWrapper>
  );
};

export default StarCard;
