import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { authService, dbService } from '../fBase';
import '../css/SignupHost.css';

const SignupHost = () => {
  const [hostName, setHostName] = useState('');
  const [hostNumber, setHostNumber] = useState('');

  const Host = {
    hostName: hostName,
    hostNumber: hostNumber,
    hostID: Date.now(),
    identityCheak: false,
    bankAccount: null,
    countSpace: 0,
    userID: authService.currentUser.uid,
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'hostName') {
      setHostName(value);
    } else if (name === 'hostNumber') {
      setHostNumber(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'Hosts'), Host);
    setHostNumber('');
    setHostName('');
  };

  const onClick = () => {
    const {
      target: { name },
    } = event;
    if (name === 'submit') {
      setHostState(true);
      //console.log(target);
    }
  };

  return (
    <div>
      <h1>호스트 되기</h1>
      <form class="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="hostName"
          placeholder="호스트 이름을 입력하세요"
          value={hostName}
          onChange={onChange}
          required
        />
        <tr />
        <input
          type="text"
          name="hostNumber"
          placeholder="호스트 연락처를 입력하세요"
          onChange={onChange}
          value={hostNumber}
          required
        />
        <tr />
        <input type="submit" value={'호스트되기'} />
      </form>
      <h3>호스트 이용약관</h3>
      <div class="SignupHost">
        <div>공간 인증하기</div>
        <div>신원 인증하기</div>
        <button name="submit" onClick={onClick}>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default SignupHost;
