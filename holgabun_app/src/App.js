//하연
import React, { useEffect, useState } from 'react';
import { dbService } from './fBase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Navbar from './components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppRouter from './components/Router';
import _ from 'lodash';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  //hostState가 true면 호스트 마이페이지를 보여줌
  const [hostState, setHostState] = useState(false);
  const [hosts, setHosts] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
      //getHostState();
    });
  }, []);

  //host 중에서 현재 user의 uid와 같은 이용자 찾기
  
  const getHostState = async () => {
    const HostsRef = collection(dbService, 'Hosts');
    const q = query(HostsRef, where('userID', '==', userObj.uid));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  };
  
  
  return (
    <>
      <Navbar />
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          hostState={hostState}
          setHostState={setHostState}
        />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
