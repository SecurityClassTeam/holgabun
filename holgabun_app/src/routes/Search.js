//승효
//검색하는 페이지
import React, { useState } from 'react';
import '../css/Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// DATE PICKER COMPONENT
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [spaceName, setSpaceName] = useState('');
  const [spaceImg, setSpaceImg] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [explain, setExplain] = useState('');

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const onChange = (event) => {
    //console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === 'spaceName') {
      setSpaceName(value);
    } else if (name === 'spaceImg') {
      setSpaceImg(value);
    } else if (name === 'spaceSize') {
      setSize(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'explain') {
      setExplain(value);
    } else if (name == 'location') {
      setLocation(value);
    }
  };

  return (
    <div className="search">
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h2>날짜를 선택하세요</h2>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      </div>

      <div>
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
      </div>
      <div>
        <h2>주소</h2>
        <input
          onChange={onChange}
          value={location}
          type="text"
          name="location"
          placeholder="도로명으로 주소를 입력해주세요"
        />
      </div>

      <div>
        <h2>가격</h2>
        <input
          onChange={onChange}
          value={price}
          type="number"
          name="price"
          min="0"
          max="1000000000"
          placeholder="판매 가격"
        />
      </div>

      <>
        <Link to="/search">
          <Button variant="primary" size="lg">
            <h2>검색</h2>
          </Button>
        </Link>
      </>
    </div>
  );
}

///search에 대한 라우팅 필요
export default Search;
