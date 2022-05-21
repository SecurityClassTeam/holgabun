//호스트 공간 등록페이지
import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import { dbService } from '../fBase';
import {
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Create() {
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = (event) => {
    event.preventDefault();
    /*
    try {
      const docRef = await addDoc(collection(dbService, 'Posts'), {
        hostID:
        spaceID:
        spaceName:
        spaceImg: spaceImg,
        price:
        period:
        location:
        size:
        explain:
        postDate: Date.now(), 
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    */
  };
  return (
    <div class="Create">
      <h1>공간 등록하기</h1>
      <form onSubmit={onSubmit}>
        <h4>공간이미지</h4>
        <input type="file" />
        <select name="공간 규격">
          <option value="none" selected>
            === 규격 선택===
          </option>
          <option value="20인치">캐리어 20인치 이하</option>
          <option value="24인치">캐리어 24인치 이하</option>
          <option value="28인치">캐리어 28인치 이하</option>
          <option value="28인치">캐리어 28인치 이상</option>
          <option value="이사">이삿짐</option>
        </select>
        <input type="number" name="price" min="0" max="1000000000">
          판매 가격
        </input>
        <h4>추가 설명란</h4>
        <input type="text" placeholder="추가로 설명할 부분을 기재해주세요" />
        <button>등록</button>
      </form>
      <div></div>
    </div>
  );
}
export default Create;