import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from '../routes/Account';
import Create from '../routes/Create';
import Home from '../routes/Home';
import HostManage from '../routes/HostManage';
import HostMyPage from '../routes/HostMyPage';
import HostPage from '../routes/HostPage';
import Mypage from '../routes/Mypage';
import SignupHost from './SignupHost';

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} userObj={userObj}/>} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/hostpage"
          element={<HostPage isLoggedIn={isLoggedIn} userObj={userObj}/>}
        />
        <Route path="/signupHost" element={<SignupHost />} />
        <Route path="/hostMypage" element={<HostMyPage />} />
        <Route path="/hostpage/create" element={<Create />} />
        <Route path="/hostpage/manage" element={<HostManage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
