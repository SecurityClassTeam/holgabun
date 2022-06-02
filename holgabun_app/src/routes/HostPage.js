import React, { useEffect, useState } from 'react';
import HostMyPage from '../components/HostMyPage';
import SignupHost from '../components/SignupHost';

const HostPage = ({ userObj, hostState, setHostState }) => {
  return (
    <div>
      {true ? (
        <HostMyPage userObj={userObj}/>
      ) : (
        <SignupHost
          userObj={userObj}
          hostState={hostState}
          setHostState={setHostState}
        />
      )}
    </div>
  );
};

export default HostPage;
