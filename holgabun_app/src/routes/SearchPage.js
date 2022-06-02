//검색 결과페이지로 보내줄 검색 결과 내용들
// 파이어베이스에서 데이터를 가져와야할 곳
import React from 'react';
import '../css/SearchPage.css';
import { Button } from '@material-ui/core';
import { collection, getDocs, query } from 'firebase/firestore';
import { dbService } from '../fBase';
import SearchResult from './SearchResult.js';

function SearchPage() {

  const getSpaces = async () => {
    const SpacesRef = collection(dbService, 'Spaces');
    const q = query(SpacesRef);
    const data = await getDocs(q);
    const newData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  };
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>3개의 결과 · 6월22일 ~ 6월 25일 · 22인치 크기</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">짐크기</Button>
        <Button variant="outlined">가격</Button>
        <Button variant="outlined">장소</Button>
        <Button variant="outlined">날짜</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title=""
        description="시내버스정류장 픽업해드립니다."
        price="10,000원 / 1일"
        total="20,000원"
      />
    </div>
  );
}

export default SearchPage;

