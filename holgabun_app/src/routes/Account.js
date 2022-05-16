import React, { useState } from 'react';
import { async } from '@firebase/util';
import { authService } from '../fBase';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const Account = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 계정 검사 후 있으면
  const [newAccount, setNewAccount] = useState(true);
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

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        const data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
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
        <input type="submit" value={newAccount ? '계정 만들기' : '로그인하기'} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? '로그인하기' : '계정만들기'}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">
          구글 계정으로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default Account;
