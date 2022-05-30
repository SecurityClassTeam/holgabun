import { NaverMap, Marker } from 'react-naver-maps';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'; // 패키지 불러오기
import React, { useState } from 'react';

function MapTest(address) {
//  const [{ lat, lng }, setGeometricData] = useState({ lat: 0, lng: 0 }); //lat-위도, lng-경도
//   naver.maps.Service.geocode(
//     {
//       query: address,
//     },
//     function (status, response) {
//       if (status === naver.maps.Service.Status.ERROR) {
//         if (!address) {
//           return alert('Geocode Error, Please check address');
//         }
//         return alert('Geocode Error, address:' + address);
//       }

//       if (response.v2.meta.totalCount === 0) {
//         return alert('No result.');
//       }
//       let item = response.v2.addresses[0];
//       setGeometricData({
//         lng: item.x,
//         lat: item.y,
//       });
//     }
//   );
  return (
    <>
      <RenderAfterNavermapsLoaded // Render후 Navermap로드
        ncpClientId={'76pwvpb6kc'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        submodules={['geocoder']}
      >
        <NaverMap
         mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
         style={{
           width: "100%", // 네이버지도 가로 길이
           height: "20vh", // 네이버지도 세로 길이
         }}
         center={{ lat:37.3595316, lng:127.1052133 }} // 지도 위치 (동적으로 변경)
         defaultZoom={13} // 지도 초기 확대 배율
       >
         <Marker
           key={1}
           position={new navermaps.LatLng(37.3595316, 127.1052133)}
           animation={2}
           onClick={() => {
             alert("여기는 N서울타워입니다.");
           }}
         />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </>
  );
}

export default MapTest;
