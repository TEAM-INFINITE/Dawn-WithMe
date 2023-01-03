import { useEffect } from 'react';
import CategoryMapCardWrapper from './styled';

const { kakao } = window;

const CategoryMapCard = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <CategoryMapCardWrapper id='map' />;
};

export default CategoryMapCard;
