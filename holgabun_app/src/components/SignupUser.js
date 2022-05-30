import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';

const SignupUser = ({ info, setInfo }) => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const User = {
    userName: userName,
    userNumber: userNumber,
    hostState: false,
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'userNumber') {
      setUserNumber(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'Users'), User);
    setUserNumber('');
    setUserName('');
  };

  return (
    <div>
      <h4>사용자 정보를 입력하세요</h4>
      <form class="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="사용자 이름을 입력하세요"
          value={userName}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="userNumber"
          placeholder="사용자 연락처를 입력하세요"
          onChange={onChange}
          value={userNumber}
          required
        />
        <input
          type="submit"
          name="submit"
          value={'정보 등록하기'}
          onClick={setInfo(true)}
        />
      </form>
    </div>
  );
};

export default SignupUser;
