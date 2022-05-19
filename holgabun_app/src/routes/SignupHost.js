import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';

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
  };

  const onChange = (event) => {
    console.log(event.target.name);
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

  return (
    <>
      <h1>호스트 되기</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="hostName"
          placeholder="호스트 이름을 입력하세요"
          value={hostName}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="hostNumber"
          placeholder="호스트 연락처를 입력하세요"
          onChange={onChange}
          value={hostNumber}
          required
        />
        <input type="submit" value={'호스트되기'} />
      </form>
      <h3>호스트 이용약관</h3>
      <div>
        
      </div>
      <div>
        <div>공간 인증하기</div>
        <div>신원 인증하기</div>
      </div>
    </>
  );
};

export default SignupHost;
