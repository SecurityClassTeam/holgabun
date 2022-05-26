import React, { useEffect, useState } from 'react';
import { dbService } from './fBase';
import { collection, getDocs, query, doc } from 'firebase/firestore';
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

  //현재 userObj의 uid와 동일한 Host.userID를 가지면 hostState를 true
  const checkHostAccount = async () => {
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        //console.log(user)
        //setUserObj({})
        setUserObj({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
        //console.log(userObj)
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
    getHosts();
    checkHostAccount();
  }, []);

  return (
    <>
      <Navbar />
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          hostState={hostState}
        />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
