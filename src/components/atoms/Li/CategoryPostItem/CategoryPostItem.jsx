import { Link } from 'react-router-dom';
import Img from '../../Img/Img';
import ProfileText from '../../P/Profile/ProfileText';
import MyCategoryPostItemWrapper from './styled';

const CategoryPostItem = ({ data }) => {
  return (
    <MyCategoryPostItemWrapper>
      <Link to={`/category/${data.itemName}/${data.id}`}>
        <Img src={data.itemImage} />
        <ProfileText fontSize='14px' lineHeight='18px'>
          {data.link}
        </ProfileText>
        {data.itemName === 'study' && (
          <ProfileText fontColor='#FEAC23' fontSize='12px' lineHeight='15px'>
            모집 인원 {Math.ceil(data.price / 2)}/{data.price}
          </ProfileText>
        )}
      </Link>
    </MyCategoryPostItemWrapper>
  );
};

export default CategoryPostItem;
