import { async } from '@firebase/util';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { dbService } from '../fBase';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignupHost from '../components/SignupHost';
import _ from 'lodash';
import HostMyPage from './HostMyPage';
import '../css/HostPage.css';

const HostPage = ({ isLoggedIn, userObj }) => {
  const [init, setInit] = useState('');
  //hostState가 true면 호스트 마이페이지를 보여줌
  const [hostState, setHostState] = useState(false);
  const [userID, setUserID] = useState(userObj.uid);
  const [hosts, setHosts] = useState('');
  
  //데이터베이스에서 호스트 정보 가져오기
  const getHosts = async () => {
    const HostsRef = collection(dbService, 'Hosts');
    const q = query(HostsRef);
    const data = await getDocs(q);

    const newData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setHosts(newData);
  };
  //console.log(hosts);
  const checkHostAccount = async () => {
    //현재 userObj의 uid와 동일한 Host.userID를 가지면
    //hostState를 true
    const host = _.find(hosts, { userID: userObj.uid });
    //console.log(host)
    if (host === undefined) {
      //console.log('undefined');
      setHostState(false);
    } else {
      //console.log('host is already exist');
      setHostState(true);
    }
  };

  useEffect(() => {
    getHosts();
    checkHostAccount();
    setInit(true);
  }, []);

  return (
    /*
    <Route path="/signupHost" element={<SignupHost />} />
    <Route path="/hostMypage" element={<HostMyPage />} />
    */

    <div>
      {isLoggedIn ? (
        <>
          {!hostState && <SignupHost />}
          {hostState && <HostMyPage />}
        </>
      ) : (
        console.log('unloggedin')
      )}
    </div>
  );
};

export default HostPage;
