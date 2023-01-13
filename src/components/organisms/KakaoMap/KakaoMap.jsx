/* eslint-disable no-undef */

import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import KakaoMapWrapper from './styled';

const KakaoMap = () => {
  const [locationState, setLocationState] = useState({
    center: {
      lat: 37.566826,
      lng: 126.9786567,
    },
    errMsg: null,
    isLoading: true,
  });
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setLocationState((prev) => ({
        ...prev,
        errMsg: '현재 위치를 불러올 수 없습니다. :(',
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(
      '스터디 카페',
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          const markersTemp = [];

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.length; i++) {
            markersTemp.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });

            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markersTemp);
          map.setBounds(bounds);
        }
      },
      {
        radius: 2000,
        location: new kakao.maps.LatLng(
          locationState.center.lat,
          locationState.center.lng,
        ),
      },
    );
  }, [locationState]);

  return (
    <KakaoMapWrapper>
      <p>내 주변 스터디 카페 🧑🏻‍💻</p>
      <Map center={locationState.center} onCreate={setMap}>
        {!locationState.isLoading && (
          <>
            <MapMarker position={locationState.center}>
              <div
                style={{
                  padding: '5px',
                  color: '#000',
                  minWidth: '150px',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {locationState.errMsg ? locationState.errMsg : '내 위치'}
              </div>
            </MapMarker>
            {markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <div
                    style={{
                      padding: '5px 5px',
                      minWidth: '150px',
                      height: 'auto',
                      background: 'white',
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      lineHeight: '18px',
                      textAlign: 'center',
                      flexWrap: 'nowrap',
                      outline: '1px solid rgb(118, 129, 168)',
                    }}
                  >
                    {marker.content}
                  </div>
                )}
              </MapMarker>
            ))}
          </>
        )}
      </Map>
    </KakaoMapWrapper>
  );
};

export default KakaoMap;
