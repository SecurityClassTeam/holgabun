//방관리 페이지
import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dbService } from '../fBase';

function SpaceImg() {
  return <img height="30px" src="" alt="MainImg" />;
}
const HostManage = ({ userObj }) => {
  /*
    //spaces 중에서 현재 user의 uid와 같은 공간들 찾기
    const getHostState = async () => {
      const HostsRef = collection(dbService, 'Spaces');
      const q = query(HostsRef, where('userID', '==', userObj.uid));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    };
*/
  return (
    <>
    <br></br>
      <div class="HostManage">
        <h2>내가 등록한 공간과 예약상태를 확인해보세요</h2>
        <div></div>
        <div></div>
        <form>
          <box class="FirstReg">
            <SpaceImg />
            <br></br>
            <button class="save">수정 및 저장</button>
          </box>
          <box class="SecondReg"></box>
        </form>
      </div>
      <br></br>
      <div>
        <Link to="/hostpage/create">
          <Button>공간 추가등록하기</Button>
        </Link>
      </div>
    </>
  );
};
export default HostManage;
