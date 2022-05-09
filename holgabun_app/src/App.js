import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Mypage from './routes/Mypage';
import SignupHost from './routes/SignupHost';
import Search_home from './routes/Search_home';
import Account from './routes/Account'; //로그인 회원가입 페이지
import { authService } from './fBase';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true)
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signupHost" element={<SignupHost />} />
          <Route path="/search/home" element={<Search_home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
