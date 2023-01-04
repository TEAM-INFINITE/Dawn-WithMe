/* eslint-disable func-names */
import { useEffect } from 'react';
import MapContainerWrapper from './styled';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  useEffect(() => {
    const Container = document.getElementById('myMap');
    const Option = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 8,
    };
    const map = new kakao.maps.Map(Container, Option);

    const ps = new kakao.maps.services.Places(map);

    const mapTypeControl = new kakao.maps.MapTypeControl();

    // eslint-disable-next-line no-use-before-define

    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < data.length; i++) {
          // eslint-disable-next-line no-use-before-define
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    };

    ps.keywordSearch(searchPlace, placesSearchCB);

    const displayMarker = (place) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(
          `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
        );
        infowindow.open(map, marker);
      });
    };

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, [searchPlace]);

  return <MapContainerWrapper id='myMap' />;
};

export default MapContainer;
