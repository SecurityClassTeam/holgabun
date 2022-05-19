//방관리 페이지
import React from 'react';
import {useState, useEffect} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {getStorage} from "firebase/storage";

function SpaceImg(){
  return <img height="30px" src="" alt="MainImg" />
}
function SpaceReg(userID, HostSpace_1){
  //위치정보 불러오기
  const SpacePosition=JSON.parse(localStorage.getItem('space'));
//예약Date 확인하기
//const ??
//설정 금액 불러오기
  const SpacePrice=JSON.parse(localStorage.getItem('spaceP'));
//설정 공간 크기 확인하기
  const SpaceSize=JSON.parse(localStorage.getItem('spaceS'));
  return (
  <h4>서울특별시 동작구 상도동 삼풍빌라 101호
  <tr>예약상태 : 모든 예약(0건)
    <ul>현재 호스팅 중(0건)</ul>
    <ul>체크인 예정(0건)</ul>
    <ul>체크아웃 예정(0건)</ul>
  </tr>
  <tr>
    설정 금액 : 이삿짐 (1)일당 7000\
  </tr>
  <tr>공간 크기 : 약 4평</tr>
  </h4>
  );
}
function HostManage() {
  {/*const [startDate,setStartDate]=useDate(new Date());
  const [endDate, setEndDate]=useDate(new Date());
  const selectedRange={
    startDate: startDate,
    endDate: endDate,
    key: "selected",
  };*/}
  //nickname 불러오기
  const username= JSON.parse(localStorage.getItem('nickname'));
  //const Memo=JSON.parse(localStorage.setItem('spaceS'));
  return (
    <div class="HostManage">
      <h2>내가 등록한 공간과 예약상태를 확인해보세요</h2>
      <form>
        <box class="FirstReg">
          <SpaceImg />
          <SpaceReg />
          <button class="correct" >수정</button>
          <button class="save" >저장</button>
        </box>
        <box class="SecondReg">

        </box>
      </form>
    </div>
  );
}
export default HostManage;