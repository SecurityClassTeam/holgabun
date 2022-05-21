import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppRouter from './components/Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

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
  }, []);

  //console.log(isLoggedIn);

  return (
    <>
      <Navbar />
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
