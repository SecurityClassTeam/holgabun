import React from 'react';
import HostMyPage from '../components/HostMyPage';
import SignupHost from '../components/SignupHost';

const HostPage = ({ userObj, hostState }) => {
  //console.log(userObj); 미로그인 상태에서는 userObj이 null
  return <div>
    {hostState ? <HostMyPage /> : <SignupHost />}</div>;
};

export default HostPage;
