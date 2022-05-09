import React, { useEffect, useState } from 'react';
import { authService, firebaseInstance } from '../fBase';

const Auth = () => {
  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState('');
    const onChange = (event) => {
      const {
        target: { name, value },
      } = event;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };
    event.target.name;
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const togggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: {name},
    } = event;
    let provider;
    if (name === "google"){
       provider = new firebaseInstance.auth.GoogleAuthProvider();
    } 
    await authService.signInWithPopup()
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Log in' : 'Create Account'}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
      </div>
    </div>
  );
};



export default Auth;