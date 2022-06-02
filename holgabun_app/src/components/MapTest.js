import { NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'; // 패키지 불러오기
import React, { useState } from 'react';

function MapTest() {
  return (
    <>
      <RenderAfterNavermapsLoaded // Render후 Navermap로드
        ncpClientId={'76pwvpb6kc'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
          mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
          style={{
            width: '100%', // 네이버지도 가로 길이
            height: '100vh', // 네이버지도 세로 길이
          }}
          center={{ lat: 37.4963462, lng: 126.9568865 }} // 지도 위치 (동적으로 변경)
          defaultZoom={15} // 지도 초기 확대 배율
        ></NaverMap>
      </RenderAfterNavermapsLoaded>
    </>
  );
}

export default MapTest;
