//승효
//검색 결과페이지로 보내줄 검색 결과 내용들
// 파이어베이스에서 데이터를 가져와야할 곳
import React from 'react';
import '../css/SearchPage.css';
import { collection, getDocs, query } from 'firebase/firestore';
import { dbService } from '../fBase';
import SearchResult from './SearchResult.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const ButtonBox = styled.div`
  width: 1000px;
  height: 50px;
  margin-left: 15px;
  margin-top: 30px;
`;

function SearchPage() {
  const [spaces, setSpaces] = useState('');
  const getSpaces = async () => {
    const SpacesRef = collection(dbService, 'Spaces');
    const q = query(SpacesRef);
    const data = await getDocs(q);
    const newData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setSpaces(newData);
  };
  useEffect(() => {
    getSpaces();
  }, []);
  console.log(spaces);
  return (
    <>
      <ButtonBox>
        <Button variant="warning">시작일: 6월 30일</Button>{' '}
        <Button variant="warning">종료일: 7월 1일</Button>{' '}
        <Button variant="warning">가격: 10,000~30,000</Button>{' '}
        <Button variant="warning">짐크기: 22인치 1개</Button>{' '}
        <Button variant="warning">검색 옵션</Button>{' '}
      </ButtonBox>

      <div className="searchPage">
        <div className="searchPage__info">
          <h1>검색 결과: N개</h1>
        </div>
        {spaces&&spaces.map((space)=>(
            <SearchResult
              img={space.spaceImg}
              location={space.location}
              title={space.spaceName}
              description={space.explain}
              price={space.price}
              total={space.price}
             />
          ))}
      </div>
    </>
  );
}

export default SearchPage;
