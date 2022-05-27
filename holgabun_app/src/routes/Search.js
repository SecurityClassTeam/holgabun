//검색하는 페이지
import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// DATE PICKER COMPONENT
function Search() {
  const history = useHistory();
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

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>짐크기</h2>
      <select name="spaceSize">
        <option value="none" selected>
          === 규격 선택===
        </option>
        <option value="20인치">캐리어 20인치 이하</option>
        <option value="24인치">캐리어 24인치 이하</option>
        <option value="28인치">캐리어 28인치 이하</option>
        <option value="28인치">캐리어 28인치 이상</option>
        <option value="이사">이삿짐</option>
      </select>
      <Button onClick={() => history.push('/search')}>검색</Button> 
    </div>
  );
}
///search에 대한 라우팅 필요
export default Search;
