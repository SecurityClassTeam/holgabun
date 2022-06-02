//호스트 공간 등록페이지
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';

const Create = ({ userObj }) => {
  const [spaceName, setSpaceName] = useState('');
  const [spaceImg, setSpaceImg] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [explain, setExplain] = useState('');
  const Space = {
    userID: userObj.uid,
    spaceID: userObj.uid + Date.now(),
    spaceName: spaceName,
    spaceImg: spaceImg,
    price: price,
    size: size,
    explain: explain,
    postDate: Date.now(),
    location: location,
  };

  //예약 날짜 및 주소 추가 필요
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

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'Spaces'), Space);
    setSpaceName('');
    setSpaceImg('');
    setPrice('');
    setSize('');
    setExplain('');
    setLocation('');
  };

  return (
    <div class="Create">
      <h1>공간 등록하기</h1>

      <h3>공간 사진을 등록하세요</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={spaceImg}
          type="file"
          name="spaceImg"
        />
        <br />
        <h3>공간 규격을 입력하세요</h3>
        <select onChange={onChange} name="spaceSize">
          <option value="none" selected>
            === 규격 선택===
          </option>
          <option value="20인치">캐리어 20인치 이하</option>
          <option value="24인치">캐리어 24인치 이하</option>
          <option value="28인치">캐리어 28인치 이하</option>
          <option value="28인치">캐리어 28인치 이상</option>
          <option value="이사">이삿짐</option>
        </select>
        <br />
        <h3>공간 주소를 입력하세요</h3>
        <input
          onChange={onChange}
          value={location}
          type="text"
          name="location"
          placeholder="도로명으로 주소를 입력해주세요"
        />
        <br />
        <h3>공간 가격을 입력하세요</h3>
        <input
          onChange={onChange}
          value={price}
          type="number"
          name="price"
          min="0"
          max="1000000000"
          placeholder="판매 가격"
        />
        <h4>공간에 대한 추가 설명을 입력하세요</h4>
        <input
          onChange={onChange}
          value={explain}
          type="text"
          name="explain"
          placeholder="추가로 설명할 부분을 기재해주세요"
        />
        <br />
        <input type="submit" value="등록" />
      </form>
    </div>
  );
};

export default Create;