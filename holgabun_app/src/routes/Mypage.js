import React from 'react';
//import {useState} from 'react';
//import Header from './Header';
//import footer from './footer';

//import './App.css';


function GuestName({ userName }) {
  return <h1>{userName}님</h1>;
}
function SpaceReg(userID){
    return <img height="30px" src="" alt="MainImg" />
}
function App() {
  return (
    <div class="Mypage">
      <div class="MypageSection">
      <form class="profile">
        <GuestName userName="Guest" />
        <h4>남는 공간을 통해 수익을 창출해보세요.</h4>
        <a href="">자세히 알아보기</a>
        </form>
      <form class="box1">
        <h2>계정관리</h2>
        <ul><button>내정보변경하기<tr>비밀번호를 변경하고 계정을 안전하게 보호하세요</tr></button></ul>
        <ul><button>결제수단관리<tr>결제내역을 확인하고 결제 수단 변경하기</tr></button></ul>
      </form>
      <form class="box2">
      <h2>공간예약</h2>
      {/*<SpaveReg/ userID="">*/}
      </form>
      </div>
    </div>
  );
}
export default App;
