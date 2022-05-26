import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
<script 
  type="text/javascript" 
  src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=76pwvpb6kc">
</script>
const Map = () => {
  const { naver } = window;

const location = new naver.maps.LatLng(37.3595704, 127.105399);
// 지도에 표시할 위치의 위도와 경도 설정

const mapOptions = {
  center: location,
  // 중앙에 배치할 위치
  zoom: 17,
  // 확대 단계
};
const map = new naver.maps.Map('map', mapOptions);
// DOM 요소에 지도 삽입 (지도를 삽입할 HTML 요소의 id, 지도의 옵션 객체)
const markser = new naver.maps.Marker({
  map,
  position: location,
});
// 지도에 마커 생성

  return (
    <div id="map" style={{ width: '500px', height: '500px' }} />
  );
};

export default Map;