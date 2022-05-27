import React from 'react';
import Home_Guest from '../components/Home_Guest';
import Home_logIn from '../components/Home_logIn';

const Home = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <Home_logIn /> : <Home_Guest />}</div>;
};
export default Home;
