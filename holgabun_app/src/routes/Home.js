import React from 'react';
import Home_Guest from './Home_Guest';
import Home_logIn from './Home_logIn';


function Home({ isLoggedIn, userObj }) {
  return (
    <div>
      {isLoggedIn ? (
        <Home_logIn userObj={userObj} isLoggedIn={isLoggedIn} />
      ) : (
        <Home_Guest userObj={userObj} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
}

export default Home;
