//하연
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Mypage from '../routes/Mypage';
import Account from './Account';
import Create from '../routes/Create';
import HostManage from './HostManage';
import Search from '../routes/Search';
import SearchPage from '../routes/SearchPage';
import HostPage from '../routes/HostPage';
import SearchDetail from '../routes/SearchDetail';
import SignupHost from './SignupHost';
import Signature from './Signature';

const AppRouter = ({ isLoggedIn, userObj, hostState, setHostState }) => {
  // hostState가 true면
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/mypage" element={<Mypage />} />
        {isLoggedIn ? (
          <Route path="/account" element={<Home isLoggedIn={isLoggedIn} />} />
        ) : (
          <Route
            path="/account"
            element={<Account isLoggedIn={isLoggedIn} />}
          />
        )}
        {isLoggedIn ? (
          <Route path="/hostpage" element={<HostPage userObj={userObj} />} />
        ) : (
          <Route
            path="/hostpage"
            element={
              <Account
                isLoggedIn={isLoggedIn}
                hostState={hostState}
                setHostState={setHostState}
              />
            }
          />
        )}

        <Route path="/hostpage/create" element={<Create userObj={userObj} />} />
        <Route path="/hostpage/manage" element={<HostManage userObj={userObj}/>} />
        <Route path="/hostpage/auth" element={<Signature userObj={userObj}/>} />

        <Route path="/search" element={<Search />} />
        <Route path="/search/detail" element={<SearchDetail />} />
        <Route path="/search/result" element={<SearchPage />}/>
      </Routes>
    </Router>
  );
};
export default AppRouter;


