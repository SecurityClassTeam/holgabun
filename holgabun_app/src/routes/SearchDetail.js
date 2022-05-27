import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




function SearchDetail(){
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  //위치정보 불러오기
  const SpacePosition = JSON.parse(localStorage.getItem('space'));
  //title 정보 불러오기
  const SpaceTitle=JSON.parse(localStorage.getItem('spaceT'));
  //space Img 불러오기
  const SpaceImg=JSON.parse(localStorage.getItem('spaceI'));
  //공간 설명 불러오기
  const SpaceEx=JSON.parse(localStorage.parse('spaceE'))
  //예약Date 확인하기
  //const ??
  //설정 금액 불러오기
  const SpacePrice = JSON.parse(localStorage.getItem('spaceP'));
  //설정 공간 크기 확인하기
  const SpaceSize = JSON.parse(localStorage.getItem('spaceS'));

  return(
    <div className='searchDetail'>
      <img src={require('./vegan.png')} height="1000px" />
      <h1>숭실대 앞 10분거리</h1>
      <h6>예약 가능 날짜</h6>
      <h4> 
        <tr>설정 금액 : 이삿짐 (1)일당 7000\</tr>
        <tr>공간 크기 : 약 4평</tr>
        <tr>설명 : 지하철 7호선 숭실대 입구역에서 10분 거리로 이삿짐 4평정도 이삿짐맡기기에 좋습니다.</tr>
      </h4>
      <h2>date 표시</h2>
      <div className='sticky' type='submit'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <Button>예약하기</Button>
      </div>

    </div>
  );
}
export default SearchDetail;