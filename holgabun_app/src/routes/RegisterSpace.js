import React, { useState } from 'react';
//import './SpaceRegister.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';

function RegisterSpace(){
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return(
    <div className='register'>
      <h2>숭실대역 도보 10분거리 </h2>
      <img src={require('./exhome.jpg')} height="100px" width="100px" />
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>짐크기</h2>
      <select name="spaceInfo">
      <option value="none" selected>
          === 규격 선택===
        </option>
        <option value="20인치">캐리어 20인치 이하</option>
        <option value="24인치">캐리어 24인치 이하</option>
        <option value="28인치">캐리어 28인치 이하</option>
        <option value="28인치">캐리어 28인치 이상</option>
        <option value="이사">이삿짐</option></select>
    <h2>위 상태에 대한 금액</h2>
    <button type="submit">예약하기</button>
    </div>
  );
}
export default RegisterSpace;