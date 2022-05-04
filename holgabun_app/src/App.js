import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Mypage from './routes/Mypage';
import SignupHost from './routes/SignupHost';
import Search_home from './routes/Search_home';
import Account from './routes/Account'; //로그인 회원가입 페이지

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signupHost" element={<SignupHost />} />
        <Route path="/search/home" element={<Search_home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
