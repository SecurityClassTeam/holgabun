//호스트 공간 등록페이지
import React, { useState } from 'react';
import { authService } from '../fBase';
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Create() {
  const [spaceName, setSpaceName] = useState('');
  const [spaceImg, setSpaceImg] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [explain, setExplain] = useState('');

  //예약 날짜 및 주소 추가 필요 
  const Space={
      hostID:authService.currentUser.uid ,
      spaceID: authService.currentUser.uid + Date.now(),
      spaceName: spaceName,
      spaceImg: spaceImg,
      price: price,
      size: size,
      explain: explain,
      postDate: Date.now(), 
    };


  const onChange = (event) => {
    console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === 'spaceName') {
      setSpaceName(value);
    } else if (name === 'spaceImg') {
      setSpaceImg(value);
    }
    else if (name==='spaceSize'){
      setSize(value);
    }
    else if( name==='price'){
      setPrice(value);
    }
    else if(name==='explain'){
      setExplain(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'Space'), Space);
    setSpaceName('');
    setSpaceImg('');
    setPrice('');
    setSize('');
    setExplain('');
  };
    
  };
  return (
    <div>
      <h1>공간 등록하기</h1>
      <form onSubmit={onSubmit}>
        <h4>공간이미지</h4>
        <input value="파일선택" type="file" name="spaceImg" />
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
        <input type="number" name="price" min="0" max="1000000000">
          판매 가격
        </input>
        <h4>추가 설명란</h4>
        <input
          type="text"
          name="explain"
          placeholder="추가로 설명할 부분을 기재해주세요"
        />
        <input type="submit" value="등록" />
      </form>
    </div>
  );
}
export default Create;
