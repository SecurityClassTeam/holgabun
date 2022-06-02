import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';

const HostSpaceComponent = ({ userObj }) => {
  const [Space, setSpace] = useState('');
  const [isEmpty, SetisEmpty] = useState(false);

  //spaces 중에서 현재 user의 uid와 같은 공간들 찾기
  const getHostState = async () => {
    const HostsRef = collection(dbService, 'Spaces');
    const q = query(HostsRef, where('userID', '==', userObj.uid));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      setSpace(querySnapshot);
    });
  };

  const checkSpaceisNull = () => {
    if (Space === '') {
      SetisEmpty(true);
    }
  };

  const SpaceSetting = () => {
    console.log(Space);
  };
  return (
    <>
      {isEmpty ? (
        <div>
          <h3>등록된 공간이 없습니다.</h3>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default HostSpaceComponent;
