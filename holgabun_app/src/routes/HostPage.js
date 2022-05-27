import React from 'react';
import HostMyPage from '../components/HostMyPage';
import SignupHost from '../components/SignupHost';

const HostPage = ({ hostState }) => {
  return <div>{hostState ? <HostMyPage /> : <SignupHost />}</div>;
};

export default HostPage;
