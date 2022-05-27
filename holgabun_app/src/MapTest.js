import { NaverMap, Marker } from 'react-naver-maps';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'; // 패키지 불러오기

function MapTest(props) {
    return (
        <>
            <RenderAfterNavermapsLoaded	   // Render후 Navermap로드
                ncpClientId={'76pwvpb6kc'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
            >
                <NaverMap
                    id="react-naver-maps-introduction"
                    style={{ width: '100%', height: '100vh' }}
                    center={{ lat: 37.497175, lng: 127.027926 }}
                >
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        </>
    )
}

export default MapTest;
