import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Account';
import Create from '../routes/Create';
import HostManage from './HostManage';
import Mypage from '../routes/Mypage';
import SignupHost from './SignupHost';
import Search from '../routes/Search';
import HostPage from '../routes/HostPage';
import Home from '../routes/Home';

const AppRouter = ({ isLoggedIn, userObj, hostState }) => {
  // hostState가 true면
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/account" element={<Account />} />

        <Route path="/hostpage" element={<HostPage hostState={hostState}/>} />
        <Route path="/hostpage/create" element={<Create />} />
        <Route path="/hostpage/manage" element={<HostManage />} />

        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
